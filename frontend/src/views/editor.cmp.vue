<template>
    <section
        class="editor-container flex column"
        :class="isEditorShown"
    >
        <editor-dashboard
            v-if="currWap"
            :wapTree="wapTree"
            :samples="samples"
            :cmpToEdit="currCmpToEdit"
            @switchedTab="emptyCmpToEdit"
            @vidChanged="setChangedVid"
            @mapZoomChanged="emitChangedZoom"
            @saveWap="saveWap"
            @focusedCmp="setCmpToEdit"
            @copiedCmp="copyCmp"
            @deletedCmp="deleteCmp"
            @movedCmp="moveCmp"
            @openPublishModal="togglePublishModal"
            @updatedSocket="updatedSocket"
            @makeWapCollab="makeWapCollab"
        >
            <toggle-editor
                slot="toggle-editor-btn"
                class="btn toggle-dashboard"
                :isEditorShow="this.isEditorShow"
                @toggled="toggleEditor"
            ></toggle-editor>
        </editor-dashboard>

        <editor-workspace
            v-if="!isLoading && currWap"
            :cmps="currWap.cmps"
            @focusedCmp="setCmpToEdit"
            @updatedTxt="updateTxt"
            @copy="copySection"
            @moveSection="moveSection"
            @droppedSample="dropSample"
            @droppedSection="dropSection"
            @delete="deleteSection"
        />
        <loader v-else />
        <publish-modal
            v-if="showPublishModal"
            @closePublishModal="togglePublishModal"
            @saveWapName="publishWebsite"
            :currWebsiteLink="currWebsiteLink"
        />
        <socket-modal
            v-if="showSocketModal"
            :currCollabLink="currCollabLink"
            @closeSocketModal="toggleSocketModal"
        />
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
import editorWorkspace from '@/cmps/editor/editor-workspace.cmp.vue';
import toggleEditor from '@/cmps/custum-cmps/toggle-editor.cmp.vue';
import { editorService } from '@/services/editor.service';
import { utilService } from '@/services/util.service';
import { wapService } from '@/services/wap.service';
import loader from '@/cmps/custum-cmps/loader.cmp.vue';
import publishModal from '@/cmps/wap/publish-modal.cmp.vue';
import { eventBus } from '@/services/event-bus.service.js'
import socketService from '@/services/socket.service';
import socketModal from '@/cmps/wap/socket-modal.cmp.vue'


export default {
    name: 'editor',
    data() {
        return {
            currWap: null,
            currCmpToEdit: null,
            isEditorShow: true,
            showPublishModal: false,
            currWebsiteLink: null,
            showSocketModal: false,
            currCollabLink: null,
        };
    },
    computed: {
        isEditorShown() {
            return { 'hide-editor': !this.isEditorShow };
        },
        samples() {
            return this.$store.getters.sampleList;
        },
        wapTree() {
            const tree=this.getCurrWapTree();
            return tree;
        },
        isLoading() {
            return this.$store.getters.isLoading;
        },
        isCollabMode() {
            return this.$store.getters.isCollabMode
        }
    },

    methods: {
        // async saveWapName(wapName) {
        //     this.saveWap(wapName)
        // },
        async makeWapCollab() {
            this.currWap.isCollab=true;
            this.$store.commit({ type: 'setCollabMode',isCollabModeOn: true });
            await this.saveWap(false);
            socketService.emit('roomRoute',this.currWap._id);
            const collabLink=`https://webcraft-ca.herokuapp.com/#/editor/${this.currWap._id}`;
            this.currCollabLink=collabLink;
            this.toggleSocketModal();

            //this will be inserted to the modal
            this.$router.push(`/editor/${this.currWap._id}`).catch(() => { });
            eventBus.$emit('show-msg',{ txt: `Collaborate mode is online`,type: 'success' })
        },
        updatedSocket() {
            socketService.emit('savedWap',this.currWap)
        },
        togglePublishModal() {
            this.showPublishModal=!this.showPublishModal;
        },
        toggleSocketModal() {
            this.showSocketModal=!this.showSocketModal
        },
        async publishWebsite(wapName) {
            this.currWap.title=wapName;
            const wap=await this.saveWap(true);
            const link=`https://webcraft-ca.herokuapp.com/#/wap/${this.currWap._id}`;
            this.currWebsiteLink=link;
        },
        copyCmp(_id) {
            const parent=editorService.findParentNode(this.currWap,_id);
            this.copyCmpInsideParent(parent,_id);
        },
        deleteCmp(_id) {
            const parent=editorService.findParentNode(this.currWap,_id);
            this.deleteCmpInsideParent(parent,_id);
        },
        moveCmp(_id,diff) {
            const parent=editorService.findParentNode(this.currWap,_id);
            this.moveCmpInsideParent(parent,_id,diff);
        },
        deleteCmpInsideParent(parentEl,_id) {
            const children=parentEl.cmps||parentEl.children;
            const idx=children.findIndex(cmp => cmp._id===_id);
            children.splice(idx,1);
            socketService.emit('savedWap',this.currWap);
        },
        moveCmpInsideParent(parentEl,_id,diff) {
            // Find the element index and replace its position according to the difference
            const children=parentEl.cmps||parentEl.children;
            const idx=children.findIndex(cmp => cmp._id===_id);
            if(idx===0&&diff===-1) return;
            const section=children.splice(idx,1);
            children.splice(idx+diff,0,section[0]);
            socketService.emit('savedWap',this.currWap);
        },
        copyCmpInsideParent(parentEl,_id) {
            const children=parentEl.cmps||parentEl.children;
            const idx=children.findIndex(child => child._id===_id);
            const el=children.find(child => child._id===_id);
            const elCopy=JSON.parse(JSON.stringify(el));
            editorService.replaceIds(elCopy);
            children.splice(idx,0,elCopy);
            socketService.emit('savedWap',this.currWap);
        },
        setChangedVid(url) {
            if(!this.currCmpToEdit) return
            this.currCmpToEdit.vidUrl=url;
        },
        emitChangedZoom(zoomValue) {
            if(!this.currCmpToEdit) return
            this.currCmpToEdit.info.zoom=zoomValue;
        },
        getCurrWapTree() {
            const currTree=this.currWap.cmps.map(cmp => {
                return editorService.makeTree(cmp);
            });
            return currTree;
        },
        toggleEditor() {
            this.isEditorShow=!this.isEditorShow;
        },
        setCmpToEdit(_id) {
            var cmpToEdit=editorService.findByIdRecursive(this.currWap.cmps,_id);
            this.currCmpToEdit=cmpToEdit;
            // socketService.emit('savedWap',this.currWap)
        },
        emptyCmpToEdit() {
            this.currCmpToEdit=null;
        },
        updateTxt(txtValue) {
            if(txtValue==='') return;
            this.currCmpToEdit.txt=txtValue;
        },
        deleteSection(_id) {
            const idx=this.currWap.cmps.findIndex(cmp => cmp._id===_id);
            this.currWap.cmps.splice(idx,1);
            socketService.emit('savedWap',this.currWap)

        },
        copySection(_id) {
            const idx=this.currWap.cmps.findIndex(cmp => cmp._id===_id);
            const section=this.currWap.cmps.find(cmp => cmp._id===_id);
            const sectionCopy=JSON.parse(JSON.stringify(section));
            editorService.replaceIds(sectionCopy);
            this.currWap.cmps.splice(idx,0,sectionCopy);
            socketService.emit('savedWap',this.currWap)
        },
        dropSection(dragResult) {
            // dragResult holds the indexes of the current position of the section
            // and the new position for it to drop to, and the section object itself
            this.currWap.cmps=utilService.applyDrag(this.currWap.cmps,dragResult);
            socketService.emit('savedWap',this.currWap)
        },
        moveSection(_id,diff) {
            // Find the section index and replace its position according to the difference
            const idx=this.currWap.cmps.findIndex(cmp => cmp._id===_id);
            if(idx===0&&diff===-1) return;
            const section=this.currWap.cmps.splice(idx,1);
            this.currWap.cmps.splice(idx+diff,0,section[0]);
            socketService.emit('savedWap',this.currWap)
        },
        async saveWap(isFirstCollab=true) {
            if(!this.isCollabMode) {
                this.currWap.isSaved=isFirstCollab;
            }
            // this.currWap.title=wapName;
            this.currWap=await this.$store.dispatch({
                type: 'saveWap',
                wap: this.currWap
            });
            if(!isFirstCollab) {
                eventBus.$emit('show-msg',{ txt: `Your website has been saved!`,type: 'success' })
            }
        },
        async dropSample(dragResult) {
            // Getting the sample from the store to copy
            const sampleToCopy=await this.$store.dispatch({
                type: 'pickedSample',
                _id: dragResult.payload._id,
            });
            let sampleCopy=JSON.parse(JSON.stringify(sampleToCopy));
            editorService.replaceIds(sampleCopy);
            // Re-assign the payload with the copy of the cmp info
            dragResult.payload=sampleCopy;
            // Drop the section in the correct drop zone
            this.dropSection(dragResult);
        },

    },
    async created() {
        //load samples for the sample list
        socketService.setup();
        socketService.on('savedWap',wap => {
            this.currWap=wap;
        })
        await this.$store.dispatch({ type: 'loadSamples' });
        var _id=this.$route.params.id;

        if(_id) {
            const wap=await this.$store.dispatch({
                type: 'loadWap',
                _id
            });
            if(this.$store.getters.loggedInUser&&
                wap.userId&&
                this.$store.getters.loggedInUser._id===wap.userId) {
                this.currWap=wap
            } else {
                let wapCopy=JSON.parse(JSON.stringify(wap));
                delete wapCopy.title;
                delete wapCopy._id;
                this.currWap=wapCopy;
            }
            if(!wap.isCollab) {
                await this.saveWap(false);
                this.$router.push('/editor/'+this.currWap._id).catch(() => { });
            }
            else if(wap.isCollab) {
                socketService.emit('roomRoute',wap._id);
            }
        }
        //open a connection
        else {
            this.currWap={
                name: '',
                cmps: [
                ]
            }
        }
    },

    components: {
        editorDashboard,
        editorWorkspace,
        toggleEditor,
        loader,
        publishModal,
        socketModal
    },
    destroyed() {
        if(this.isCollabMode&&!this.currWap.isSaved&&!this.currWebsiteLink) {
            this.$store.commit({ type: 'setCollabMode',isCollabModeOn: false })
            this.$store.dispatch({ type: 'deleteWap',wapId: this.currWap._id })
        }
        socketService.off('savedWap',wap => {
            this.currWap=wap;
        })
    }
};
</script>

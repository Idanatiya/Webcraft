<template>
    <section class="editor-dashboard">
        <section class="tab-container flex">
            <button
                v-for="tab in tabs"
                :key="tab"
                class="btn flex column align-center tab-btn"
                :class="{ selected: currTab === tab }"
                @click="toggleTabs(tab)"
            >
                {{ tab }}
            </button>
        </section>
        <slot name="toggle-editor-btn"></slot>
        <section class="dashboard-container">
            <component
                class="editor-body"
                :is="currDashboard"
                :samples="samples"
                :cmpToEdit="cmpToEdit"
                :wapTree="wapTree"
                @focused="emitFocusCmp"
                @copied="emitCopyCmp"
                @deleted="emitDeleteCmp"
                @moved="emitMoveCmp"
                @vidChanged="emitChangedVid"
                @mapZoomChanged="emitChangedZoom"
                @updatedSocket="emitUpdateSocket"
            >
            </component>
        </section>
        <user-controls
            @makeWapCollab="emitMakeWapCollab"
            @saveWap="emitSaveWap"
            @saveSample="emitSaveSample"
            @openPublishModal="emitOpenPublishModal"
            @saveWapName="emitSaveWapName"
            @openLoginModal="emitOpenLoginModal"
        />
    </section>
</template>

<script>
import editorsContainer from '@/cmps/editor/editors-container.cmp.vue';
import typeList from '@/cmps/editor/type-list.cmp.vue';
import dataTree from '@/cmps/editor/data-tree.cmp.vue';
import userControls from '@/cmps/editor/user-controls.cmp.vue';

export default {
    name: 'editor-dashboard',
    props: {
        cmpToEdit: {
            type: Object
        },
        wapTree: {
            type: Array
        },
        samples: {
            type: Array
        }
    },
    data() {
        return {
            currTab: 'add',
            tabs: ['tree','add','edit'],
        }
    },
    methods: {
        emitOpenLoginModal() {
            this.$emit('openLoginModal')
        },
        emitMakeWapCollab() {
            this.$emit('makeWapCollab')
        },
        emitUpdateSocket() {
            this.$emit('updatedSocket')
        },
        emitDeleteCmp(_id) {
            this.$emit('deletedCmp',_id)
        },
        emitCopyCmp(_id) {
            this.$emit('copiedCmp',_id)
        },
        emitMoveCmp(_id,diff) {
            this.$emit('movedCmp',_id,diff)
        },
        toggleTabs(tab) {
            this.currTab=tab;
            if(this.currTab!=='edit') {
                this.$emit('switchedTab');
            }
        },
        emitFocusCmp(_id) {
            this.$emit('focusedCmp',_id)
            setTimeout(() => {
                this.toggleTabs('edit')
            },500)
        },
        emitChangedVid(url) {
            this.$emit('vidChanged',url);
        },
        emitChangedZoom(zoomValue) {
            this.$emit('mapZoomChanged',zoomValue);
        },
        emitSaveWap() {
            this.$emit('saveWap')
        },
        emitOpenPublishModal() {
            this.$emit('openPublishModal')
        },
        emitSaveSample() {
            this.$emit('saveSample')
        },
        emitSaveWapName(wapName) {
            this.$emit('saveWapName',wapName)
        }
    },
    computed: {
        currDashboard() {
            if(this.currTab==='tree') return 'data-tree';
            if(this.currTab==='edit') return 'editors-container';
            return 'type-list';
        },

    },
    updated() {
        if(this.cmpToEdit) this.currTab='edit';
    },
    components: {
        typeList,
        editorsContainer,
        dataTree,
        userControls
    }
}
</script>

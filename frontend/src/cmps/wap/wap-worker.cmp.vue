<template>
    <!-- The flow goes from the bottom worker upwards -->
    <component
        class="worker-class"
        :info="getInfo"
        :id="'el-' + workerHoverClass"
        :frameborder="0"
        :is="name"
        :src="urlSrc"
        :contenteditable="editable"
        :allowfullscreen="video"
        :style="cmp.style"
        :class="cmp.class"
        :placeholder="cmp.placeholder"
        @blur="updateTxt"
        @focused="onFocus"
        @ondragstart="imgDraggable"
        @click.stop.prevent="onFocus(cmp._id)"
    >
        <controls
            v-if="cmp.name === 'section'"
            :_id="cmp._id"
            @copy="emitCopy"
            @delete="emitDelete"
            @moveSection="emitMoveSection"
        />
        <!-- This Div will be inserted into the slot that each child gets - if the v-if is true -->
        <div
            class="misc-control"
            slot="misc-control"
            v-if="vidOrMap"
        >
            <button
                class="iframe-btn btn"
                @click.stop.prevent="onFocus(cmp.children[0]._id)"
            >
                <i class="fas fa-link"></i>
            </button>
        </div>
        {{ cmpTxt }}
        <template v-if="cmp.children">
            <wap-worker
                v-for="child in cmp.children"
                :key="child._id"
                :cmp="child"
                @blur="updateTxt"
                @focused="onFocus"
                @updatedTxt="emitUpdateTxt"
            >
                <!-- This Slot will get the misc-control div if the v-if is true -->
                <slot name="misc-control"></slot>
            </wap-worker>
        </template>
    </component>
</template>

<script>
import googleMap from '@/cmps/samples/google-map.cmp.vue';
import controls from '@/cmps/editor/controls.cmp.vue';
export default {
    name: 'wap-worker',
    props: {
        parentInfo: Object,
        cmp: {
            type: Object,
            required: true
        },
        siteMode: {
            type: Boolean
        }
    },

    computed: {
        name() {
            const { name }=this.cmp;
            if(name==='txt') return 'span';
            if(name==='link') return 'a';
            if(name==='vid') return 'iframe';
            else return name
        },
        cmpTxt() {
            return this.cmp.txt||''
        },
        urlSrc() {
            return (this.cmp.imgUrl)? this.cmp.imgUrl:((this.cmp.vidUrl)? this.convertedUrl:'');
        },
        convertedUrl() {
            if(this.cmp.vidUrl.includes("?v=")) {
                const vidId=this.cmp.vidUrl.split("?v=")[1];
                return `https://www.youtube.com/embed/${vidId}`;
            }
            return this.cmp.vidUrl
        },
        editable() {
            if(this.cmp.name==='txt'||this.cmp.name==='link') return true;
            return false
        },
        video() {
            if(this.cmp.name==='iframe') return true
            return false
        },
        imgDraggable() {
            if(this.cmp.name==='img') return false;
            return true
        },
        workerHoverClass() {
            return this.cmp._id
        },
        getInfo() {
            if(!this.cmp.info) return;
            return this.cmp.info
        },
        vidOrMap() {
            return this.cmp.class==='video-container'||this.cmp.class==='map-container';
        }
    },
    methods: {

        updateTxt(ev) {
            // This is the first event of "udpateTxt" - which will tell 
            // the next father worker that update happened
            if(this.cmp.name==='txt'||this.cmp.name==='link') {
                this.$emit('updatedTxt',ev.target.innerText);
            }
            return;
        },
        emitUpdateTxt(txtValue) {
            // This is the recursive event of "udpateTxt" - which will tell the next 
            //  father worker that update happened untill it reaches the workspace
            this.$emit('updatedTxt',txtValue);
        },
        onFocus(_id) {
            this.$emit('focused',_id)
        },
        emitCopy(_id) {
            this.$emit('copy',_id);
        },
        emitDelete(_id) {
            this.$emit('delete',_id);
        },
        emitMoveSection(_id,diff) {
            this.$emit('moveSection',_id,diff);
        }
    },
    components: {
        googleMap,
        controls,

    },
};
</script>



<template>
    <section class="section section-editor flex column align-center">
        <p class="editor-txt">Set Round Edges:</p>
        <my-range
            :options="{ initVal: sectionRadius, min: 0, max: 250 }"
            @input="setSectionRadius"
        />
        <template v-if="cmpToEdit.name !== 'img'">
            <p class="editor-txt">Set A Background Color</p>
            <bgc-picker @input="setColor" />
            <color-picker @changeColor="setColor" />
        </template>
        <div class="img-uploader">
            <div
                v-if="showBgPreview"
                class="preview"
                :style="'background-color:' + cmpToEdit.style.background + ';'"
            >
                <img
                    v-if="cmpToEdit.imgUrl"
                    :src="cmpToEdit.imgUrl"
                />
            </div>
            <p class="editor-txt">Or Add An Image As A Background</p>
            <label class="user-input input-file"><i class="fas fa-cloud-upload-alt"></i>
                <input
                    class="hide"
                    type="file"
                    @change="emitUploadImg"
                />
            </label>
        </div>
        <img-search @setImg="setImg" />
    </section>
</template>

<script>
import myRange from '@/cmps/custum-cmps/my-range.cmp.vue';
import bgcPicker from '@/cmps/custum-cmps/bgc-picker.cmp.vue';
import colorPicker from '@/cmps/editor/color-picker.cmp.vue';
import imgSearch from '@/cmps/editor/editors/img-search.cmp.vue';
import { utilService } from '@/services/util.service';

export default {
    name: 'section-editor',
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    methods: {
        async emitUploadImg(ev) {
            const res=await utilService.uploadImg(ev);
            this.cmpToEdit.style.background=`url(${res.url}) center / cover no-repeat`;
            this.cmpToEdit.imgUrl=res.url;
            this.$emit('updatedSocket');
        },
        setColor(color) {
            if(this.cmpToEdit.imgUrl) this.cmpToEdit.imgUrl=null
            this.cmpToEdit.style.background=color;
            this.$emit('updatedSocket');
        },
        setImg(imgUrl) {
            this.cmpToEdit.imgUrl=imgUrl
            this.cmpToEdit.style.background=`url(${imgUrl}) center / cover no-repeat`;
            this.$emit('updatedSocket');
        },
        setSectionRadius(radius) {
            this.cmpToEdit.style.borderRadius=radius+'px';
            this.$emit('updatedSocket');
        }
    },
    computed: {
        sectionRadius() {
            const { borderRadius }=this.cmpToEdit.style;
            return parseInt(borderRadius,10);
        },
        showBgPreview() {
            return this.cmpToEdit.imgUrl||this.cmpToEdit.style.background!=='transparent';
        }
    },
    components: {
        myRange,
        colorPicker,
        imgSearch,
        bgcPicker
    },
};
</script>

<style lang="scss" scoped>
.img-uploader {
    margin-block-start: 1rem;
}
.preview {
    width: 250px;
    height: 200px;
    border: 1px solid #cdc8c8;
    margin: 1.5rem auto;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
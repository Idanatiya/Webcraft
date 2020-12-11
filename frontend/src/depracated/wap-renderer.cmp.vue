<template>
    <component
        :is="template.el"
        :style="template.style"
        :href="template.href"
        :type="elType"
        :class="template.class"
        @input.prevent="onInput"
        @click.stop.prevent="onClick"
    >
        {{template.innerText}}
        <template v-if="template.children">
            <wap-renderer
                v-for="child in template.children"
                :key="child._uid"
                :template="child"
            />
        </template>
    </component>
</template>

<script>
import googleMap from '@/cmps/samples/google-map.cmp.vue';
export default {
    name: 'wap-renderer',
    props: {
        template: {
            type: Object,
            required: true
        }
    },
    data(){
        return {}
    },
    mounted() {
        if (this.template.imgUrl || this.template.vidUrl){
            this.$el.src = this.urlSrc
        }
    },
    computed:{
        urlSrc(){
            return (this.template.imgUrl) ? this.template.imgUrl : ((this.template.vidUrl) ? this.convertedUrl : '') 
            // This sort if will give an img url or a vid url, if there are none - nothing will be inserted into the src
        },
        elType(){
            return this.template.type
        },
        convertedUrl() {
            if(this.template.vidUrl.includes("?v=")){
                const id = this.template.vidUrl.split("?v=")[1];
                return `https://www.youtube.com/embed/${id}`;
            }
            return this.template.vidUrl
        }
    },
    methods: {
        onInput(ev) {
        },
        onClick(ev) {
            if (this.$el.localName !== 'button' && this.$el.localName !== 'a') return
             window.location.href = this.$el.href
        }
    },
    components:{
        googleMap,
    },
    

};
</script>

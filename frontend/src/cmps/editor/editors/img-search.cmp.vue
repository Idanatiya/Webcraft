<template>
    <section class="unsplash-search">
        <form @submit.prevent="searchImgs">
            <div class="form-container flex justify-center">
                <input
                    type="text"
                    placeholder="Search Image..."
                    v-model.trim="term"
                />
                <button class="btn btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </form>
        <div class="unsplash-imgs-container grid">
            <div
                class="unsplash-img-card"
                v-for="(img, idx) in imgs"
                :key="idx"
            >
                <img
                    class="unsplash-img"
                    :src="img.thumb"
                    @click="onImgSelect(img)"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { utilService } from '@/services/util.service';
export default {
    name: 'img-search',
    data() {
        return {
            term: null,
            imgs: []
        }
    },
    methods: {
        async searchImgs() {
            
            this.imgs = await utilService.getImgs(this.term)
            this.term = null
        },
        onImgSelect(img) {
            this.$emit('setImg', img.regular)
        }
    },
    components: {
    }
};
</script>
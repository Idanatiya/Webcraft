<template>
    <section class="video-search-container">
        <form @submit.prevent="searchVideos" class="video-form flex column align-items">
            <input type="text" v-model.trim="term" placeholder="Search videos...">
            <button class="btn btn-search video-search-btn">
                <i class="fas fa-search"></i>
            </button>
            <!-- <button class="video-btn">Search video!</button> -->
        </form>
        <div class="video-thumb-container">
            <div class="video-thumnbail" v-for="(video, idx) in videos" :key="idx">
                <h4 class="vid-title">{{video.title}}</h4>
                <img class="video-img" :src="video.thumbnail" @click="onVideoSelect(video.videoId)" />
            </div>
        </div>
    </section>
</template>

<script>
import { utilService } from '@/services/util.service';
export default {
    name: 'video-search',
    data() {
        return {
            term: '',
            videos: []
        }
    },
    methods: {
        async searchVideos() {
            const videos=await utilService.videoSearch(this.term);
            this.videos=videos;
            this.term='';
        },
        onVideoSelect(videoId) {
            this.$emit('setVideo',videoId)
        }
    },

}
</script>

<style>
</style>
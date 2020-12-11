import axios from 'axios';

export const utilService = {
    applyDrag,
    makeId,
    getImgs,
    uploadImg,
    videoSearch
}

function makeId() {
    return Math.random().toString(36).substring(2, 12)
}

function applyDrag(cmps, dragResult) {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return cmps;
    const result = [...cmps];
    let itemToAdd = payload;
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
};

async function getImgs(term) {
    const apiKey = 'DL-fOJKfzUbQ2irbF2Oleeza3GuX2LyJ-mVPCUJsJc8';
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${term}&client_id=${apiKey}`);
    const imgs = res.data.results.map(img => img.urls);
    return imgs;
}


async function videoSearch(searchTerm) {
    const apiKey = 'AIzaSyAL9hmi8XD2yjr3qrRzuBNP33qgdy5bvss';
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&videoEmbeddable=true&type=video&key=${apiKey}&q=${searchTerm}`);
    const videos = res.data.items.map(video => {
        const { videoId } = video.id
        const { url } = video.snippet.thumbnails.default
        const { title } = video.snippet

        return {
            title: title.substring(0, 10),
            videoId,
            thumbnail: url
        }
    })
    return videos
}

async function uploadImg(ev) {
    const UPLOAD_PRESET = 'tfdzm5iy';
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/dpro0mdti/image/upload`;
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', ev.target.files[0]);
    FORM_DATA.append('upload_preset', UPLOAD_PRESET);
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA);
        return res.data;
    } catch (err) {
        console.error('ERROR!', err);
    }
}
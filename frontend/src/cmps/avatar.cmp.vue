<template>
    <div class="avatar" :style="{
            width: size + 'px',
            height: size + 'px',
            backgroundColor:  imgUrl ? '' : color,
            lineHeight: size + 'px',
        }">
        <span v-if="username && !imgUrl">{{ computeName }} </span>
        <img v-else :src="imgUrl" />
    </div>
</template>

<script>
export default {
    name: 'avatar',
    props: {
        username: {
            type: String,
        },
        imgUrl: {
            type: String
        },
        size: {
            type: Number
        },
        color: {
            type: String
        },

    },
    computed: {
        computeName() {
            return this.username.split(' ').map(letter => letter.charAt(0)).join('').toUpperCase()
        },
    },
    created() {
    }
}
</script>

<style lang="scss">
.avatar {
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    font-family: carme;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    span {
        color: white;
        letter-spacing: 1px;
        font-size: 1.125rem;
    }
}
</style>
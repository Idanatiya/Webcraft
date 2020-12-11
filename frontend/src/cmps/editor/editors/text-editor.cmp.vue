<template>
    <section class="text-editor flex column align-center">
        <div
            class="editor-link-container flex column align-center"
            v-if="isLink"
        >
            <p class="editor-txt">Attach an external link to this button:</p>
            <input
                type="text"
                placeholder="Insert a link"
                v-model="cmpToEdit.href"
            />
            <i class="fas fa-link"></i>
        </div>
           <p class="editor-txt">Text Background Color</p>
        <bgc-picker @input="setBgc" />
        <div class="ranges-container flex column align-center" v-if="cmpToEdit">
            <my-select
                :options="fonts"
                @change="setFontFamily"
                class="custom-select"
            />
            
            <p class="editor-txt">Font Size</p>
            <my-range
                :options="{ initVal: fontSize, min: 1, max: 100 }"
                @input="setFontSize"
            />
            <p class="editor-txt">Line Height</p>
            <my-range
                :options="{
                    initVal: (cmpToEdit.style.lineHeight * 2.5),
                    min: 0,
                    max: 20,
                }"
                @input="setLineHeight"
            />
            <p class="editor-txt">Letter Spacing</p>
            <my-range
                :options="{ initVal: letterSpacing, min: 0, max: 30 }"
                @input="setLetterSpacing"
            />
        </div>
        <div class="align-controls flex space-between">
            <button class="btn align-btn" @click="setTextAlign('left')">
                <i class="fas fa-align-left"></i>
            </button>
            <button class="btn align-btn" @click="setTextAlign('center')">
                <i class="fas fa-align-center"></i>
            </button>
            <button class="btn align-btn" @click="setTextAlign('right')">
                <i class="fas fa-align-right"></i>
            </button>
        </div>
        <div class="decoration-controls flex space-between">
            <button
                class="btn align-btn"
                @click="setTxtDecoration('underline')"
            >
                <i class="fas fa-underline"></i>
            </button>
            <button class="btn align-btn" @click="setFontStyle('italic')">
                <i class="fas fa-italic"></i>
            </button>
            <button class="btn align-btn" @click="setFontWeight('bold')">
                <i class="fas fa-bold"></i>
            </button>
        </div>
     
        <p class="editor-txt">Text Color</p>
        <color-picker @changeColor="setColor" />
    </section>
</template>

<script>
import mySelect from '@/cmps/custum-cmps/my-select.cmp.vue';
import myRange from '@/cmps/custum-cmps/my-range.cmp.vue';
import colorPicker from '@/cmps/editor/color-picker.cmp.vue';
import bgcPicker from '@/cmps/custum-cmps/bgc-picker.cmp.vue';


export default {
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    name: 'text-editor',
    data() {
        return {
            fonts: [{
                label: 'Arial',
                value: 'Arial'
            },
            {
                label: 'Helvetica',
                value: 'Helvetica'
            },
            {
                label: 'Georgia',
                value: 'Georgia'
            },
            {
                label: 'Monospace',
                value: 'Monospace'
            },
            {
                label: 'Cursive',
                value: 'Cursive'
            },
            {
                label: 'Ruhl',
                value: 'ruhl'
            },
            {
                label: 'Vibes',
                value: 'Vibes'
            },
            {
                label: 'Bungee',
                value: 'bungee'
            },
            {
                label: 'Carme',
                value: 'carme'
            },
            {
                label: 'Arbutus',
                value: 'arbutus'
            },
            {
                label: 'Poppins',
                value: 'poppins'
            }
            ]
        }
    },
    methods: {
        setFontFamily(font) {
            this.cmpToEdit.style.fontFamily = font;
            this.$emit('updatedSocket');
        },
        setFontSize(size) {
            this.cmpToEdit.style.fontSize = size + 'px';
            this.$emit('updatedSocket');
        },
        setLineHeight(size) {
            this.cmpToEdit.style.lineHeight = size / 2.5;
            this.$emit('updatedSocket');
        },
        setLetterSpacing(size) {
            this.cmpToEdit.style.letterSpacing = size + 'px';
            this.$emit('updatedSocket');
        },
        setTxtDecoration(decoration) {
            const { textDecoration } = this.cmpToEdit.style;
            if (textDecoration === decoration) this.cmpToEdit.style.textDecoration = 'revert'
            else this.cmpToEdit.style.textDecoration = decoration
            this.$emit('updatedSocket');
        },
        setFontStyle(txtStyle) {
            const { fontStyle } = this.cmpToEdit.style;
            if (fontStyle === txtStyle) this.cmpToEdit.style.fontStyle = 'revert'
            else this.cmpToEdit.style.fontStyle = txtStyle
            this.$emit('updatedSocket');
        },
        setFontWeight(weight) {
            const { fontWeight } = this.cmpToEdit.style;
            if (fontWeight !== weight) this.cmpToEdit.style.fontWeight = weight
            else this.cmpToEdit.style.fontWeight = 'normal'
            this.$emit('updatedSocket');
        },
        setTextAlign(direction) {
            this.cmpToEdit.style.textAlign = direction;
            this.$emit('updatedSocket');
        },
        setColor(color) {
            this.cmpToEdit.style.color = color;
            this.$emit('updatedSocket');
        },
        setBgc(color) {
            this.cmpToEdit.style.background = color;
            this.$emit('updatedSocket');
        }
    },
    computed: {
        isLink() {
            if (!this.cmpToEdit) return false;
            return this.cmpToEdit.name === 'link'
        },
        fontSize() {
            const { fontSize } = this.cmpToEdit.style;
            return parseInt(fontSize, 10);
        },
        letterSpacing() {
            const { letterSpacing } = this.cmpToEdit.style;
            return parseInt(letterSpacing, 10);
        }
    },
    components: {
        mySelect,
        myRange,
        colorPicker,
        bgcPicker
    }
};
</script>

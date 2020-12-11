<template>
    <ul class="tree-branch">
        <li
            :class="{ selected: isItemOpen }"
            class="tree-branch-name"
            :id="'el-' + workerHoverClass"
            @focused="onFocus"
            @deleted="onDelete"
            @copied="onCopy"
            @moved="onMoveCmp"
            @click.stop="toggleAccordionItem(!isItemOpen)"
        >
            <h3>
                {{ cmpTitle }}
            </h3>

            <div class="branch-controls-btns">
                <button
                    class="btn branch-btn"
                    @click.stop.prevent="onFocus(cmp._id)"
                >
                    <i class="fas fa-pen"></i>
                </button>
                <button
                    class="btn branch-btn"
                    @click.stop="onDelete(cmp._id)"
                >
                    <i class="fas fa-trash"></i>
                </button>
                <button
                    class="btn branch-btn"
                    @click.stop="onCopy(cmp._id)"
                >
                    <i class="fas fa-copy"></i>
                </button>
                <button
                    class="btn branch-btn"
                    @click.stop="onMoveCmp(cmp._id, -1)"
                >
                    <i class="fas fa-angle-double-up"></i>
                </button>
                <button
                    class="btn branch-btn"
                    @click.stop="onMoveCmp(cmp._id, 1)"
                >
                    <i class="fas fa-angle-double-down"></i>
                </button>
            </div>

            <template v-if="cmp.children && isItemOpen">
                <transition-group name="open-branch" />
                <tree-branch
                    slot="branch-slot"
                    v-for="child in cmp.children"
                    :key="child._id"
                    :cmp="child"
                    @focused="onFocus"
                    @deleted="onDelete"
                    @copied="onCopy"
                    @moved="onMoveCmp"
                />
                <transition-group />
            </template>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'tree-branch',
    props: {
        cmp: {
            type: Object
        }
    },
    data() {
        return {
            items: [],
            open: null,
            isItemOpen: false
        }
    },
    methods: {
        onFocus(_id) {
            this.$emit('focused',_id)
        },
        onDelete(_id) {
            this.$emit('deleted',_id)
        },
        onCopy(_id) {
            this.$emit('copied',_id)
        },
        onMoveCmp(_id,diff) {
            this.$emit('moved',_id,diff)
        },
        registerItem(item) {
            this.items.push(item)
            if(this.open===null) {
                item.toggleAccordionItem(true)
            }
        },
        unregisterItem(item) {
            if(this.open===item) {
                this.open=null
            }
            const idx=this.items.findIndex(i => i._uid===item._uid)
            this.items.splice(idx,1)
        },
        setItemOpen(item,isOpen) {
            for(let i=0;i<this.items.length;i++) {
                const currItem=this.items[i]
                if(isOpen===true&&currItem._uid!==item._uid) {
                    currItem.toggleAccordionItem(false)
                }
            }
            if(isOpen===false) {
                this.open=null;
            } else {
                this.open=item;
            }
        },
        toggleAccordionItem(value) {
            if(value!==this.isItemOpen) {
                this.isItemOpen=value
                this.$parent.setItemOpen(this,this.isItemOpen)
            }
        }
    },
    computed: {
        cmpTitle() {
            if(this.cmp) {
                const { name }=this.cmp;
                if(name==='section'||name==='div') return 'Section ';
                if(name==='txt'||name==='i') return 'Text';
                if(name==='link') return 'Link';
                if(name==='img') return 'Image';
                if(name==='iframe') return 'Video';
                if(name==='google-map') return 'Map';
                return this.cmp.name;
            }
        },
        workerHoverClass() {
            return this.cmp._id
        }
    },
    beforeMount() {
        this.$parent.registerItem(this)
    },
    beforeDestroy() {
        this.$parent.unregisterItem(this)
        this.$el.removeEventListener("mouseover",() => {
            // do nothing
        },true);
        this.$el.removeEventListener("mouseleave",() => {
            // do nothing again
        },true);

    },
    mounted() {
        const el=document.querySelectorAll(`#el-${this.cmp._id}`)
        this.$el.addEventListener('mouseover',(ev) => {
            ev.stopPropagation();
            // Branch element:
            // el[0].style.outline = '1.5px dashed #124a76';
            // Workspace element:
            el[1].style.outline='2.5px dashed #124a76';
            if(el[1].localName==='div'||el[1].localName==='section') el[1].style.border='3px dashed #124a76';

            var timer=setTimeout(() => {
                // Branch element:
                // el[0].style.outline = null;
                // Workspace element:
                el[1].style.outline=null;
                if(el[1].localName==='div'||el[1].localName==='section') el[1].style.border=null;
            },3000)
        })
        this.$el.addEventListener('mouseleave',(ev) => {
            ev.stopPropagation();
            // Branch element:
            // el[0].style.outline = null;
            // Workspace element:
            el[1].style.outline=null;
            if(el[1].localName==='div'||el[1].localName==='section') el[1].style.border=null;
        })
    },
}
</script>


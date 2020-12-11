import httpService from './http.service.js';
import { utilService } from './util.service.js';

function query() {
    const samples = httpService.get('sample');
    return samples;
}

function save(sample) {
    const saveSample = sample._id ? _update(sample) : _add(sample);
    return saveSample;
}

function findByIdRecursive(nodes, _id) {
    //Find the id of an element even if it is a child of another element
    for (let i = 0; i < nodes.length; i++) {
        const child = nodes[i];
        if (child._id === _id) {
            return child;
        } else {
            if (child.children) {
                const foundElement = findByIdRecursive(child.children, _id);
                if (foundElement) {
                    return foundElement;
                }
            }
        }
    }
}

function replaceIds(node) {
    //replace the ids of sample in order to differ from section to section
    node._id = utilService.makeId();
    if (node.children) {
        node.children.forEach(child => {
            this.replaceIds(child);
        });
    }
}

function makeTree(node) {
    const parent = {
        name: node.name,
        _id: node._id,
        class: node.class,
        children: []
    };
    if (node.children) {
        node.children.forEach(child => {
            parent.children.push(this.makeTree(child));
        });
    }
    return parent;
}

function findParentNode(parent, _id) {
    const children = parent.cmps || parent.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child._id === _id) {
            return parent;
        } else {
            if (child.children) {
                const foundElement = findParentNode(child, _id);
                if (foundElement) {
                    return foundElement;
                }
            }
        }
    }
}
export const editorService = {
    query,
    save,
    findByIdRecursive,
    replaceIds,
    makeTree,
    findParentNode,
    cleanSample
}



function _add(sample) {
    return httpService.post(`sample`, sample);
}

function _update(sample) {
    return httpService.put(`sample/${wap._id}`, sample);
}

function cleanSample(sample) {
    _setStyle(sample);
    if (sample.children) {
        sample.children.forEach(child => cleanSample(child))
    }
}

function _setStyle(el) {
    const { style } = el;
    el.style.background = style.background || 'unset';
    el.style.borderRadius = style.borderRadius || 'unset';
    el.style.fontSize = style.fontSize || 'inherit';
    el.style.lineHeight = style.lineHeight || 'inherit';
    el.style.letterSpacing = style.letterSpacing || 'inherit';
    el.style.color = style.color || 'inherit';
    el.style.textDecoration = style.textDecoration || 'inherit';
    el.style.fontWeight = style.fontWeight || 'inherit';
    el.style.fontStyle = style.fontStyle || 'inherit';
    el.style.textAlign = style.textAlign || 'inherit';
    el.style.textShadow = style.textShadow || 'unset';
    el.style.boxShadow = style.boxShadow || 'unset';
    el.style.borderWidth = style.borderWidth || 'unset';
    el.style.borderStyle = style.borderStyle || 'unset';
    el.style.borderColor = style.borderColor || 'unset';
    if (el.name !== 'i') el.style.fontFamily = style.fontFamily || 'inherit';
}
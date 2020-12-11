import httpService from './http.service.js';


function query(filterBy) {
    const searchQuery = filterBy ? `?userId=${filterBy}` : '';
    const waps = httpService.get(`wap${searchQuery}`);
    return waps;
}

function getById(wapId) {
    return httpService.get(`wap/${wapId}`)
}

function save(wap) {
    const saveWap = wap._id ? _update(wap) : _add(wap);
    return saveWap;
}

function _add(wap) {
    return httpService.post(`wap`, wap);
}

function _update(wap) {
    return httpService.put(`wap/${wap._id}`, wap);
}

function remove(wapId) {
    return httpService.delete(`wap/${wapId}`)
}

export const wapService = {
    query,
    getById,
    save,
    remove
};
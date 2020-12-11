import { wapService } from '@/services/wap.service';
import { userService } from '@/services/user.service'
export const wapStore = {
    state: {
        waps: [

        ],
        currUserWaps: []

    },
    getters: {
        getWaps(state) {
            return state.waps.filter(wap => wap.title).map(wap => {
                const { _id, thumbnail, title } = wap
                return {
                    _id,
                    thumbnail,
                    title
                };
            });
        },
        currUserWaps(state) {
            return state.currUserWaps;
        }
    },
    mutations: {
        setWaps(state, { waps }) {
            state.waps = waps
        },
        deleteWap(state, { wapId }) {
            const idx = state.currUserWaps.findIndex(wap => wap._id === wapId)
            if (idx === -1) return;
            state.currUserWaps.splice(idx, 1)
        },
        setUserWaps(state, { waps }) {
            state.currUserWaps = waps;
        }
    },
    actions: {
        async loadWaps({ commit }) {
            commit({ type: 'setIsLoading', isLoading: true });
            const waps = await wapService.query();
            commit({ type: "setWaps", waps });
            commit({ type: 'setIsLoading', isLoading: false });
        },
        async loadWap(context, { _id }) {
            // commit({ type: 'setIsLoading', isLoading: true })
            const wap = await wapService.getById(_id);
            // commit({ type: 'setIsLoading', isLoading: false })
            return wap;
        },
        async saveWap(context, { wap }) {
            // commit({ type: 'setIsLoading', isLoading: true })
            const savedWap = await wapService.save(wap);
            // commit({ type: 'setIsLoading', isLoading: false })
            return savedWap
        },
        async deleteWap({ commit }, { wapId }) {
            commit({ type: 'setIsLoading', isLoading: true });
            await wapService.remove(wapId)
            commit({ type: 'deleteWap', wapId })
            commit({ type: 'setIsLoading', isLoading: false });

        },
        async loadUserWaps({ commit }, { userId }) {
            const waps = await wapService.query(userId);
            commit({ type: 'setUserWaps', waps })
        },
        async getOwnerWapReviews({ commit }, { userId }) {
            const waps = await wapService.query(userId);
            const curUserWaps = waps.map(wap => {
                const { thumbnail, _id, title } = wap;
                const reviews = wap.reviews ? wap.reviews : '';
                return {
                    thumbnail,
                    _id,
                    title,
                    reviews
                }
            });
            return curUserWaps
        },
        // async deleteMsgs({ commit }, { userId }) {
        //     const waps = await wapService.query(userId);
        //     waps.forEach(wap => {
        //         await wapService.delete(wap._id);
        //     })
        // }
    }
}
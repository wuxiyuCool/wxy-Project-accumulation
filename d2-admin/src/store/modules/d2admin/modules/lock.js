
export default {
    namespaced: true,
    state: {
        // 全屏激活
        active: false,
        lockPassword: ''
    },
    actions: {
        
    },
    mutations: {
        /**
         * @description 设置 store 里的全屏状态
         * @param {Object} state vuex state
         * @param {Boolean} active active
         */
        set(state, active) {
            state.active = active
        },
        setPassword(state, password) {
            state.lockPassword = password
        }
    }
}
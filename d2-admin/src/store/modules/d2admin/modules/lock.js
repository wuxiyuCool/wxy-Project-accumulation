
export default {
    namespaced: true,
    state: {
        // 是否进入锁屏模式
        active: false,
        // 锁屏密码
        lockPassword: ''
    },
    actions: {
        
    },
    mutations: {
        /**
         * @description 设置 store 里的是否进入锁屏模式
         * @param {Object} state vuex state
         * @param {Boolean} active active
         */
        set(state, active) {
            state.active = active
        },
        /**
         * 
         * @param {object} state vuex state
         * @param {string} password 锁屏密码
         */
        setPassword(state, password) {
            state.lockPassword = password
        }
    }
}
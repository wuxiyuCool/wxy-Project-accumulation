import * as types from './mutation-types'
const matutaions = {
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_LABEL_DEFAULT](state, LabelDefault) {
    state.LabelDefault = LabelDefault
  },
}
export default matutaions
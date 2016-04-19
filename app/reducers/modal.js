import * as types from '../actions/modal'

const initialState = {
  isOpen: false,
  mode: ''
};

export default function modal (state = initialState, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        isOpen: true,
        mode: action.mode,
        editedList: action.editedList
      }

    case types.CLOSE_MODAL:
      return {
        isOpen: false
      }

    default:
      return state
  }
}

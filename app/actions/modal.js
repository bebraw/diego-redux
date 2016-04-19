export const OPEN_MODAL = 'OPEN_MODAL'
export function openModal (mode, editedList) {
  return {
    type: OPEN_MODAL,
    mode: mode,
    editedList: editedList // id
  }
}

export const CLOSE_MODAL = 'CLOSE_MODAL'
export function closeModal () {
  return {
    type: CLOSE_MODAL
  }
}

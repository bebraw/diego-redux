export const OPEN_MODAL = 'OPEN_MODAL'
export function openModal (mode) {
  return {
    type: OPEN_MODAL,
    mode: mode
  }
}

export const CLOSE_MODAL = 'CLOSE_MODAL'
export function closeModal () {
  return {
    type: CLOSE_MODAL
  }
}

import React from 'react'
import Lists from './Lists'
import { connect } from 'react-redux'
import { createList } from '../actions/lists'
import Modal from './Modal'
import ItemForm from './ItemForm'
import * as itemActions from '../actions/items'
import * as listActions from '../actions/lists'
import * as modalActions from '../actions/modal'

export class App extends React.Component {
  handleClick = () => {
    this.props.createList({title: 'New Shopping List'})
  }

  render() {
    const {
      lists, mode,
      modalIsOpen, openModal, closeModal,
      createItem, updateItem
    } = this.props

    return (
      <div>
        <button
          className='add-list'
          onClick={this.handleClick}>New Shopping List</button>

        <Lists lists={lists}/>

        <Modal
          className='list-add-item'
          openModal={modalIsOpen}>
          <ItemForm
            mode={mode}
            onSubmit={form => {
              // Resolve mode and commit
              const fn = mode === 'Add' ? createItem : updateItem

              fn(form)

              closeModal()
            }} />
        </Modal>
      </div>
    )
  }
}

export default connect(state => ({
  lists: state.lists,
  modalIsOpen: state.modal.isOpen,
  mode: state.modal.mode
}), {
  ...itemActions,
  ...listActions,
  ...modalActions
})(App)

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
      lists, mode, editedList,
      modalIsOpen, openModal, closeModal,
      createItem, updateItem, connectToList
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
              if(mode === 'Add') {
                const {item} = createItem(form);

                connectToList(editedList, item.id)
              }
              else {
                updateItem(form);
              }

              closeModal()
            }} />
        </Modal>
      </div>
    )
  }
}

export default connect(state => ({
  lists: state.lists,
  editedList: state.modal.editedList, // figure out a good place for this state
  modalIsOpen: state.modal.isOpen,
  mode: state.modal.mode
}), {
  ...itemActions,
  ...listActions,
  ...modalActions
})(App)

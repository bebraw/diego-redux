import React from 'react'
import Item from './Item'

export default class Items extends React.Component {
  render () {
    const {items, onEdit, openModal, onValueClick, onDelete, ...props} = this.props

    return (
      <ul className='items'>{items.map((item) =>
        <Item
          className='item'
          key={item.id}
          id={item.id}
          sku={item.sku}
          text={item.text}
          price={item.price}
          isEditing={item.isEditing}
          onValueClick={onValueClick.bind(null, item.id)}
          onEdit={onEdit.bind(null, item.id)}
          onDelete={onDelete.bind(null, item.id)} >
        </Item>
      )}</ul>
    )
  }
}

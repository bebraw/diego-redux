import React from 'react'

export default class Item extends React.Component {
  render () {
    // const { openModal, ...props } = this.props
    const {onEdit, onValueClick, isEditing, ...props} = this.props

     return (
      <div {...props} >
        {isEditing ? this.renderEdit() : this.renderValue()}
      </div>
    )
    // return (
      // <span>
        // <li>SKU: {this.props.sku}</li>  
        // <li>ITEM: {this.props.text}</li>
        // <li>PRICE: {this.props.price}</li>
        // <button onClick={this.props.openModal}>Edit Item</button> << open Modal and edit item
      // </span>
    // )
  }

  renderEdit = () => {
    return (
      <form>
          <label>SKU</label>
          <input 
            type="text" 
            placeholder="SKU" 
            autoFocus={true}
            ref={(e) => e ? e.selectionStart = this.props.sku.length : null }
            defaultValue={this.props.sku}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
          />

          <label>Item</label>
          <input 
            type="text"
            placeholder="Item" 
            autoFocus={true}
            ref={(e) => e ? e.selectionStart = this.props.text.length : null }
            defaultValue={this.props.text}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
          />

          <label>Price</label>
          <input 
            type="text"
            placeholder="Price"
            autoFocus={true}
            ref={(e) => e ? e.selectionStart = this.props.price.length : null }
            defaultValue={this.props.price}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
          />
      </form>
    )
  }

 renderValue = () => {
    const onDelete = this.props.onDelete

    return (
      <div>
        <div onClick={this.props.onValueClick}>
          <span className='value' ref='sku'>{this.props.sku}</span>
          <span className='value' ref='text'>{this.props.text}</span>
          <span className='value' ref='price'>{this.props.price}</span>
          {onDelete && this.renderDelete()}
        </div>
      </div>
    )
  }

  renderDelete = () => {
    return <button className='delete' onClick={this.props.onDelete}>x</button>
  }

  checkEnter = (event) => {
    if(event.key === 'Enter') {
      this.finishEdit(event.target)
    }
  }

  finishEdit = (event) => {
    // if(this.props.onEdit) { << Handle this with multiple attributes
      // this.props.onEdit(item)
    // }
    // this.setState({ isEditing: false })
  } 

}

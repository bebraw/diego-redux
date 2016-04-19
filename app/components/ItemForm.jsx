import React from 'react';
import {reduxForm} from 'redux-form';

class ItemForm extends React.Component {
  render() {
    const {fields: {sku, item, price}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
          <label>SKU</label>
          <input
            type="text"
            placeholder="SKU"
            autoFocus={true}
            {...sku}
          />

          <label>Item</label>
          <input
            type="text"
            placeholder="Item"
            autoFocus={true}
            {...item}
          />

          <label>Price</label>
          <input
            type="text"
            placeholder="Price"
            autoFocus={true}
            {...price}
          />

        <button type="submit">Edit item</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'item',
  fields: ['sku', 'item', 'price']
}, () => {}, {
  onSubmit: e => console.log(e)
})(ItemForm);

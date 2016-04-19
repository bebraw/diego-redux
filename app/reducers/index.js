import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import items from './items'
import lists from './lists'
import modal from './modal'

const ShoppingListReducers = combineReducers({
  items,
  lists,
  modal,
  form: formReducer
})

export default ShoppingListReducers

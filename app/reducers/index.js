import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import items from './items'
import lists from './lists'

const ShoppingListReducers = combineReducers({
  items,
  lists,
  form: formReducer
})

export default ShoppingListReducers

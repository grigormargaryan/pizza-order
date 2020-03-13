import order from './order';
import pizzas from './pizza';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  order,
  pizzas
});

export default rootReducer
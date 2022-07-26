import { combineReducers } from "redux";
// import productReducer from './productReducer'
// import categoryReducer from './categoryReducer'
import SizeReducer from './SizeReducer'
// import bandReducer from './categoryReducer'

const rootReducer = combineReducers({
      // ProductReducer,
      // CategoryReducer,
      // BrandReducer,
      sizes : SizeReducer,
});

export default rootReducer;
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../../actions/productTypes';

const initialState = {
  loading: false,
  products: [],
  error: ''
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload, error: '' };
    case FETCH_PRODUCTS_FAILURE:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

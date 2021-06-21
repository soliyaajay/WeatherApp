import {
    CITY_LIST_SUCCESS,
    CITY_LIST_FAILURE,
    CITY_LIST_WATCHER,
} from '../../constant';

import {
    CITY_LIST_SERVICE
} from '../../action/types';

const initialState = {
  error: null,
  getCityLoader: false,
  cityData: [],
  
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case CITY_LIST_SERVICE:
      return {
        ...state,
        cityData: action.payload
      };
      case CITY_LIST_WATCHER:
      return {
        ...state,
        getCityLoader: true
      };
    case CITY_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        cityData: action.payload,
        getCityLoader: false
      };
    case CITY_LIST_FAILURE:
      return {
        ...state,
        error: action,
        getCityLoader: false
      };
    default:
      return state;
  }
};

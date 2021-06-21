import {
    CITY_LIST_SUCCESS,
    CITY_LIST_FAILURE,
    CITY_LIST_WATCHER,
} from '../../constant';

import {
    CITY_LIST_SERVICE
} from '../types';

export function getCityList(payload) {
    return { type: CITY_LIST_SERVICE, payload };
}

export function getCityListWatcher(resolve, reject) {
    return { type: CITY_LIST_WATCHER, resolve, reject };
}

export function getCityListSuccess(payload) {
    return { type: CITY_LIST_SUCCESS, payload: payload };
}

export function getCityListError(error) {
    return { type: CITY_LIST_FAILURE, payload: error };
}
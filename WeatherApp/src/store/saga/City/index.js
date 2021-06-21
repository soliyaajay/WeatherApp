import { takeLatest, put, call } from 'redux-saga/effects';

import {
    CITY_LIST_WATCHER,
} from '../../constant';

import {
    getCityListError,
    getCityListWatcher,
    getCityListSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

function* onGetCity(userLoginAction) {
    let { payload, resolve, reject } = userLoginAction;
    try {
        const header = { 'Content-Type': 'application/json' }
        const response = yield fetch(BASE_URL+API_URL.getCityList, {
            method: 'GET',
            // headers: header,
            // body: JSON.stringify(payload)
        }).then((res) => res.json());
        yield put(getCityListSuccess(response));        
        resolve(response);
    } catch (e) {
        yield put(getCityListError(e));        
        reject(e);        
    }
}

export function* getCityListActionWatcher() {
    yield takeLatest(CITY_LIST_WATCHER, onGetCity)
}
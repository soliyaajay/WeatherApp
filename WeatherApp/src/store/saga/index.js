import {all} from 'redux-saga/effects'

import {getCityListActionWatcher} from './City'

export default function * root () {
  yield all([
    getCityListActionWatcher(),
  ])
}

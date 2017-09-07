import getJSON from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = (() => {
    return {
      ...commonParams,
      platform: 'h5',
      needNewCode: 1,
      g_tk: 67232076
    }
  })()
  return getJSON(url, data, options)
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = (() => {
    return {
      ...commonParams,
      topid,
      page: 'detail',
      type: 'top',
      tpl: 3,
      uin: 0,
      platform: 'h5',
      needNewCode: 1
    }
  })()
  return getJSON(url, data, options)
}
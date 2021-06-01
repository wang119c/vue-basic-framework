import Vue from 'vue'
import settings from '@/settings.js'
import { isArray, isString } from '@/utils/validate'
import store from '../store'

const { errorLog: needErrorLog } = settings

function checkNeed () {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = function (err, vm, info, e) {
    // 捕获全局错误
    // https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      store.dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      })
    })
  }
}

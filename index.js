import Vue from 'vue'
import Toast from './Toast'
import { update } from './utils'

const createComponent = function (options = {}) {
  const { transition } = options

  return update(Toast, {
    components: {
      toastTransition: transition
    }
  })
}

document.body.insertAdjacentHTML('beforeend', '<div id="toast"></div>')

const ToastInst = new Vue(
  Object.assign({}, Toast, { // app body
    el: '#toast'
  })
)

export { ToastInst, createComponent }

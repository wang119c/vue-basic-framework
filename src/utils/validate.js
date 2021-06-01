/**
 * 验证是不是字符串
 * @param str
 * @returns {boolean}
 */
export function isString (str) {
  return typeof str === 'string' || str instanceof String
}

/**
 * 验证是不是数组
 * @param arg
 * @returns boolean
 */
export function isArray (arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

if (typeof window.plus$hooks !== 'object') {
  window.plus$hooks = {};
}

/**
 * Hook geter or seter.
 *
 * @param {String} name
 * @param {Function} closure
 * @return {Any}
 * @author Seven Du <shiweidu@outlook.com>
 */
const hook = (name, closure) => {
  if (closure instanceof Function) {
    window.plus$hooks[name] = closure;

    return hook;
  }

  if (window.plus$hooks[name] instanceof Function) {
    return window.plus$hooks[name];
  }

  throw new Error(`「${name}」钩子不存在。`);
};

export default hook;
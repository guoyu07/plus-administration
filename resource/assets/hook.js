const hook = (hookName, closure) => (
  if (closure instanceof Function) {
    window.plus$hooks[hookName] = closure;

    return hook;
  }

  if (window.plus$hooks[hookName] instanceof Function) {
    return window.plus$hooks[hookName];
  }

  throw exception('钩子不存在');
);

export default hook;

import * as MaterialUI from 'material-ui/index.es';
import hook from '../hook';

// Resgister Material UI to hooks.
hook('material-ui', key => key ? MaterialUI[key] : MaterialUI);

// Register Material UI items to hooks.
const recursion = (key) => {
  const items = hook(key)();

  if (typeof items !== 'object') {
    return;
  }

  for (let i in items) {
    const item = items[i];
    const $key = `${key}/${i}`;

    if (typeof item === 'object') {
      hook($key, $key$ => $key$ ? item[$key$] : item);
    } else {
      hook($key, () => item);
    }

    recursion($key);
  }
};
recursion('material-ui');

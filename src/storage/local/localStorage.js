export function setLocalStorage(key, data, expires = null) {
  window.localStorage.setItem(key, JSON.stringify({ data, expires }));
}

export function getLocalStorage(key, defaults = null) {
  const obj = JSON.parse(window.localStorage.getItem(key));
  if (!obj) {
    return defaults;
  }

  if (obj.expires && obj.expires <= new Date().getTime()) {
    removeLocalStorage(key);
    return defaults;
  }

  return obj.data || defaults;
}

export function removeLocalStorage(key) {
  window.localStorage.removeItem(key);
}

export function clearLocalStorage() {
  window.localStorage.clear();
}

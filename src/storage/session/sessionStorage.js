export function setSessionStorage(key, data, expires = null) {
  window.sessionStorage.setItem(key, JSON.stringify({ data, expires }));
}

export function getSessionStorage(key, defaults = null) {
  const obj = JSON.parse(window.sessionStorage.getItem(key));
  if (!obj) {
    return defaults;
  }

  if (obj.expires && obj.expires <= new Date().getTime()) {
    removeSessionStorage(key);
    return defaults;
  }

  return obj.data || defaults;
}

export function removeSessionStorage(key) {
  window.sessionStorage.removeItem(key);
}

export function clearSessionStorage() {
  window.sessionStorage.clear();
}

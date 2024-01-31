export function toParams(query: string) {
  const q = query.replace(/^(\?|#)/, '');

  return q.split('&').reduce((values, param) => {
    const [key, value] = param.split('=');

    return { ...values, [key]: decodeURIComponent(value) };
  }, {});
}

export function toQuery(params: { [x: string]: any }, delimiter = '&') {
  const keys = Object.keys(params);

  return keys.reduce((str, key, index) => {
    let query = `${str}${key}=${params[key]}`;

    if (index < keys.length - 1) {
      query += delimiter;
    }

    return query;
  }, '');
}

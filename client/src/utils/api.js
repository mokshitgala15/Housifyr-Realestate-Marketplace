const trimmedApiUrl = import.meta.env.VITE_API_URL?.trim();
const apiBaseUrl = trimmedApiUrl
  ? trimmedApiUrl.replace(/\/+$/, '')
  : '/api';

const isAbsoluteApiUrl = /^https?:\/\//i.test(apiBaseUrl);

export const getApiUrl = (path = '') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${apiBaseUrl}${normalizedPath}`;
};

export const apiRequest = (path, options = {}) => {
  const requestOptions = {
    ...options,
    credentials: isAbsoluteApiUrl ? 'include' : options.credentials,
  };

  return fetch(getApiUrl(path), requestOptions);
};

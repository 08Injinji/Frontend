import { HTTP_URL } from '../constants';

export const request = async (url, options) => {
  const res = await fetch(`${HTTP_URL}${url}`, {
    ...options,
  });
  return await res.json();
};

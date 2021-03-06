import { wrapRequest, instance } from "./instance";

// 기본 post 요청
export const postRequest = wrapRequest(async (url, data) => {
  return instance().post(url, data);
});
// 기본 get 요청
export const getRequest = wrapRequest(async (url, data) => {
  return instance().get(url, { params: data });
});
// 기본 put 요청
export const putRequest = wrapRequest(async (url, data) => {
  return instance().put(url, data);
});

// method patch
export const patchRequest = wrapRequest(async (url, data) => {
  return instance().patch(url, data);
});

// method delete
export const deleteRequest = wrapRequest(async (url) => {
  return instance().delete(url);
});

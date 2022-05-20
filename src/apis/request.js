import { HTTP_URL } from "../constants";

export const request = async (url, options) => {
    try {
        const res = await fetch(`${HTTP_URL}${url}`, {
            ...options,
        })
        if (!res.ok){
            throw new Error('API 호출 중 문제가 발생했습니다.');
        }
        return await res.json()
    } catch(e) {
        console.log(e);
    }
}
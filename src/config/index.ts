export const KAKAO_CLIENT_ID = import.meta.env.VITE_APP_REST_API_KEY;
export const KAKAO_REDIRECT_URL = import.meta.env.VITE_APP_REDIRECT_URL;
export const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

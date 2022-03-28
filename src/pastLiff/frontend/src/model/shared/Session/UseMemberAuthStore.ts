import { MemberAuth } from "./MemberAuth";

export interface MemberAuthStore {
  setMemberAuthToStorage: (auth: MemberAuth) => void;
  getMemberAuthFromStorage: () => MemberAuth;
  clearMemberAuthStorage: () => void;
  isValidAuth: (auth: MemberAuth) => boolean;
}

export const useMemberAuthStore = (): MemberAuthStore => {
  /**
   * (private) expiryを取得する
   */
  const getExpiry = (): number => {
    const authExpiry = localStorage.getItem("auth/expiry");
    return authExpiry ? parseInt(authExpiry) : 0;
  };

  /**
   * (private) expiryから有効期限切れか判断する
   */
  const isExpiredToken = (expiry: number): boolean => {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    return expiry <= currentTime;
  };

  /**
   * localStorageに認証情報をセットする
   */
  const setMemberAuthToStorage = (auth: MemberAuth): void => {
    localStorage.setItem("auth/token", auth.token || "");
    localStorage.setItem("auth/uid", auth.uid || "");
    localStorage.setItem("auth/expiry", auth.expiry.toString());
  };

  /**
   * localStorageから認証情報を取得する
   */
  const getMemberAuthFromStorage = (): MemberAuth => {
    const token = localStorage.getItem("auth/token") || "";
    const uid = localStorage.getItem("auth/uid") || "";
    const expiry = getExpiry();
    return { token, uid, expiry };
  };

  /**
   * localStorageの認証情報を削除する
   */
  const clearMemberAuthStorage = (): void => {
    localStorage.removeItem("auth/token");
    localStorage.removeItem("auth/uid");
    localStorage.removeItem("auth/expiry");
  };

  /**
   * (private) パラメータとして渡された認証情報からログイン状態を判定する
   */
  const isValidAuth = (auth: MemberAuth): boolean => {
    return !!auth.token && !!auth.uid && !isExpiredToken(auth.expiry);
  };

  return {
    setMemberAuthToStorage,
    getMemberAuthFromStorage,
    clearMemberAuthStorage,
    isValidAuth
  };
};

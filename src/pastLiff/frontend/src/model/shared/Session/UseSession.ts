import SessionAuthenticateResponse from "../../api/response/liff/session/SessionAuthenticateResponse";
import { useMemberAuthStore } from "./UseMemberAuthStore";
import { MemberAuth } from "./MemberAuth";
import { useState } from "react";

export interface UseSession {
  setMemberAuthFromResponse: (
    authResponse: SessionAuthenticateResponse,
    saveSession: boolean
  ) => void;
  getMemberAuth: () => MemberAuth;
  clearMemberAuth: () => void;
  isSigned: () => boolean;
}

export const useSession = (): UseSession => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const memberAuthStore = useMemberAuthStore();

  // ----------------------------------------
  // Private
  // ----------------------------------------
  const setMemberAuthFromResponseToStore = (
    authResponse: SessionAuthenticateResponse
  ): void => {
    setMemberAuthToStore(responseToMemberAuth(authResponse));
  };

  const getMemberAuthFromStore = (): MemberAuth => {
    return memberAuthStore.getMemberAuthFromStorage();
  };

  const responseToMemberAuth = (
    authResponse: SessionAuthenticateResponse
  ): MemberAuth => {
    const expiryDate = new Date(authResponse.expiry);
    return {
      token: authResponse.token,
      uid: authResponse.uid,
      expiry: expiryDate.getTime()
    };
  };

  const setMemberAuthToStore = (auth: MemberAuth): void => {
    if (memberAuthStore.isValidAuth(auth)) {
      memberAuthStore.setMemberAuthToStorage(auth);
    } else {
      memberAuthStore.clearMemberAuthStorage();
    }
  };

  const clearMemberAuthFromStore = (): void => {
    memberAuthStore.clearMemberAuthStorage();
  };

  // ----------------------------------------
  // State
  // ----------------------------------------
  // 「ログイン情報を保持する」つまり、セッションをローカルに保存するか（オプション）をユーザーが指定する事が可能であるため、
  //  ストア（現在はlocalStore）とは別に、stateとしてセッションを保持する必要がある。
  //  API経由での認証情報の受け渡しは、ストアではなくstateの認証情報を優先的に使用する
  const [auth, setAuth] = useState<MemberAuth>(getMemberAuthFromStore());

  // ----------------------------------------
  // Public
  // ----------------------------------------
  const setMemberAuthFromResponse = (
    authResponse: SessionAuthenticateResponse,
    saveSession: boolean
  ): void => {
    if (saveSession) {
      setMemberAuthFromResponseToStore(authResponse);
    } else {
      clearMemberAuthFromStore();
    }
    setAuth(getMemberAuthFromStore());
    //console.log(getMemberAuthFromStore());
    //console.log(auth);
  };

  const getMemberAuth = (): MemberAuth => {
    return memberAuthStore.isValidAuth(auth) ? auth : getMemberAuthFromStore();
  };

  const clearMemberAuth = (): void => {
    memberAuthStore.clearMemberAuthStorage();
  };

  const isSigned = (): boolean => {
    return memberAuthStore.isValidAuth(getMemberAuth());
  };

  // ----------------------------------------
  // Event
  // ----------------------------------------
  return {
    getMemberAuth: getMemberAuth,
    clearMemberAuth: clearMemberAuth,
    setMemberAuthFromResponse: setMemberAuthFromResponse,
    isSigned
  };
};

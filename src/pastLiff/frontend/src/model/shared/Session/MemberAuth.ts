/**
 * 認証情報IF
 */
export interface MemberAuth {
  token: string | null;
  uid: string | null;
  expiry: number;
}

/**
 * (private) 認証情報の初期値
 */
export const initialMemberAuth = ():MemberAuth => {
  return {
    token: "",
    uid: "",
    expiry: 0
  }
};

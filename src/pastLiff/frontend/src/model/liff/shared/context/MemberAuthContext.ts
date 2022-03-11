import * as React from "react";
import {
  initialMemberAuth,
  MemberAuth
} from "../../../shared/Session/MemberAuth";

export const MemberAuthContext = React.createContext<Partial<MemberAuth>>(
  initialMemberAuth()
);

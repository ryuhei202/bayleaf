import { ReturnSelectItemCallback } from "../callback/ReturnSelectItemCallback";
import { ReturnReserveType } from "../../shared/ReturnReserveType";
import { useState } from "react";
import { usePathGenerator } from "../../../../shared/router/UsePathGenerator";
import { ReturnSelectRouting } from "../routing/ReturnSelectRouting";
import { useNavigate } from "react-router-dom";

export interface ReturnSelectHandler {
  returnSelectItemCallback: () => ReturnSelectItemCallback;
  selectedReserveType: () => ReturnReserveType | null;
}

export const useReturnSelectHandler = (): ReturnSelectHandler => {
  // ----------------------------------------
  // hooks
  // ----------------------------------------
  const [_selectedReserveType, setSelectedReserveType] =
    useState<ReturnReserveType | null>(null);
  const navigate = useNavigate();
  const pathGenerator = usePathGenerator();

  // ----------------------------------------
  // public
  // ----------------------------------------
  const returnSelectItemCallback = (): ReturnSelectItemCallback => {
    return {
      onClick: onClick,
    };
  };

  /**
   * 選択したタイプを返す
   */
  const selectedReserveType = (): ReturnReserveType | null => {
    return _selectedReserveType;
  };
  // ----------------------------------------
  // private
  // ----------------------------------------
  const onClick = (returnReserveType: ReturnReserveType) => {
    setSelectedReserveType(returnReserveType);
    const reservePath = pathGenerator.generate(ReturnSelectRouting.reserve);
    const path = `${reservePath}/${returnReserveType}`;
    navigate(path);
  };

  return { returnSelectItemCallback, selectedReserveType };
};

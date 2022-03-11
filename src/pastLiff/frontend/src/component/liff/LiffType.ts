enum LiffType {
  CoordeIndex = "Tp68jbvP",
  MoreIndex = "f2Sa9rMg",
  MarriageMoreIndex = "rPy3fNRS",
  AddressIndex = "Pv7RzVkF",
  ReturnIndex = "rgrLKF2s",
}

namespace LiffType {
  export const isForMarriage = (type: LiffType): boolean => {
    switch (type) {
      case LiffType.CoordeIndex:
      case LiffType.MoreIndex:
      case LiffType.ReturnIndex:
      case LiffType.AddressIndex:
        return false;
      case LiffType.MarriageMoreIndex:
        return true;
    }
  };
}

export { LiffType };

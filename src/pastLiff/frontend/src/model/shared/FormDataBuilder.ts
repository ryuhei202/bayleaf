interface FormDataBuilder {
  toJson: (target: Object) => string;
  toBlob: (target: Object) => Blob;
}

export const formDataBuilder = (): FormDataBuilder => {
  /**
   * JSONに変換する
   */
  const toJson = (target: Object) => {
    return JSON.stringify(target, null, 1);
  };

  /**
   * Blobに変換する
   */
  const toBlob = (target: Object) => {
    return new Blob([JSON.stringify(target, null, 1)], {
      type: "application/json"
    });
  };

  return { toJson, toBlob };
};

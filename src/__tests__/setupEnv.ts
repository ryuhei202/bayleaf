// Jest用の環境変数をセットする
// eslint-disable-next-line import/no-anonymous-default-export
export default (): void => {
  process.env.REACT_APP_HOST_URL = "http://localhost:3000";
};

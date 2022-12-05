// Jest用の環境変数をセットする
export default (): void => {
  process.env.REACT_APP_HOST_URL = "http://localhost:3000";
};

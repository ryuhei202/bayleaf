import { useLocation } from "react-router-dom";

export interface PathGenerator {
  generate: (targetPath: string) => string;
  generateWithIdKey: (targetPath: string) => string;
}

// [注意] Routerで囲んだ配下のコンポーネントで使うこと。それ以外で使うと「Cannot read property 'match' of undefined」が発生する
export const usePathGenerator = (): PathGenerator => {
  const routeMatch = useLocation();

  /**
   * 指定のパスに上位のパスを付与して生成する
   */
  const generate = (targetPath: string): string => {
    return `${routeMatch.pathname}${targetPath}`;
  };

  /**
   * IDのキー付きのパス生成
   */
  const generateWithIdKey = (targetPath: string): string => {
    return `${generate(targetPath)}/:id`;
  };

  return { generate, generateWithIdKey };
};

import liff from "@line/liff";
import { AfterConsult } from "./AfterConsult";

type TProps = {
  readonly displayUploadGuide?: boolean;
};
export const AfterConsultContainer = ({ displayUploadGuide }: TProps) => {
  return displayUploadGuide ? (
    <AfterConsult
      title={
        <>
          LINEで相談したいアイテムの
          <br />
          着用写真をお送りください！
        </>
      }
      subTitle="ご相談したいアイテムの着用写真をお受け取り次第、スタイリストからLINEでご相談内容を詳しく伺います。"
      btnText="LINEへ戻る"
      onClick={liff.closeWindow}
    />
  ) : (
    <AfterConsult
      title={
        <>
          スタイリストからLINEで
          <br />
          ご相談内容を詳しく伺います！
        </>
      }
      subTitle="コーデを自信を持って着ていただけるように、お悩み内容を確認しスタイリストからご連絡させていただきます。"
      btnText="LINEへ戻る"
      onClick={liff.closeWindow}
    />
  );
};

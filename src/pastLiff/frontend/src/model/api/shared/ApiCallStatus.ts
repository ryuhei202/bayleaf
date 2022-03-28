export enum ApiCallStatus {
  Idle = 0, // 通常の状態
  ShouldRun = 1, // APIコールを開始したい場合にこのステータスにする
  Running = 2, // 通信中
  Error = 3 // エラーになった場合
}

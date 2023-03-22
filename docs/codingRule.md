# コーディング規約

## 目的

**開発効率の向上**

- スタイルの統一による、可読性の向上
- コーディング時の書式に関する迷いの削減

## ルール

### 目次

- [コーディング規約](#コーディング規約)
  - [目的](#目的)
  - [ルール](#ルール)
    - [目次](#目次)
    - [tailwindcss](#tailwindcss)
    - [命名規則](#命名規則)
      - [定数](#定数)
      - [型](#型)
      - [ファイル名](#ファイル名)
      - [コールバック関数](#コールバック関数)
    - [キーワード引数](#キーワード引数)

<a name="tailwindcss"></a>

### tailwindcss

- 補完を効かせるために className アトリビュート内に直接定義する

```tsx
// Good
<div className="px-3 w-full" />;
// Bad
let classes: string[] = ["px-3", "w-full"];
<div className={`${classes.join(" ")}`} />;
```

- スタイルを override できるように props で受け取る className はデフォルトクラスより後に定義する

```tsx
// Good
const Hoge = ({ className }) => {
  return <div className={`px-3 w-full ${className}`} />;
};
// Bad
const Hoge = ({ className }) => {
  return <div className={`${className} px-3 w-full`} />;
};
```

### 命名規則

#### 定数

- UPPER_SNAKE_CASE で記述する

```ts
// Good
const HOGE_PIYO = "HOGE";

// Bad
const hoge_piyo = "HOGE";
const hogePiyo = "HOGE";
const HogePiyo = "HOGE";
```

#### 型

- PascalCase で記述する
- 接頭辞に"T"をつける

```ts
// Good
type TMember = { id: number; name: string };

// Bad
type t_member = { id: number; name: string };
type tMember = { id: number; name: string };
type Member = { id: number; name: string };
```

- レスポンスの型は以下のような命名にする
- T[コントローラ名][アクション名]Response.ts

```ts
// Good
type TMembersIndexResponse = { id: number; name: string };

// Bad
type MembersIndex = { id: number; name: string };
type MembersResponse = { id: number; name: string };
type TMemberIndexResponse = { id: number; name: string };
```

#### ファイル名

- ts ファイルは camelCase で記述する

```
// Good
useHoge.ts

// Bad
UseHoge.ts
use_hoge.ts
```

- tsx ファイルは PascalCase で記述する

```
// Good
HogePiyo.tsx

// Bad
hogePiyo.tsx
hoge_piyo.tsx
```

#### コールバック関数

- 呼び出す関数を onXXX、呼び出される関数を handleXXX で記述する

```tsx
// Good
<Button onClick={handleClick} />;

// Bad
<Button onClick={setNumber} />;
<Button click={handleClick} />;
<Button handleClick={handleClick} />;
<Button setNumber={setNumber} />;
```

### キーワード引数

- 引数は数に関わらずキーワード引数で記述する

```.ts
// Good
getHoge({ hoge: x })
const getHoge = ({hoge}) => {}

// Bad
getHoge(x)
const getHoge = (hoge) => {}
```

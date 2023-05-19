## 学んだこと

- GraphQLはAPIに用いるクエリ言語ではある
  - SQLのようにデータベースへの問い合わせ言語ではない

- RESTAPIのデメリットを改善したもの
  - `Underfetching` と `Overfetching` を解決

- スキーマを定義する必要がある
  - スキーマタイプ
    - オブジェクトタイプ
      - データの定義
    - Queryタイプ
      - Read Operation（問い合わせ）を行うクエリの定義
    - Mutationタイプ
      - Write Operation（作成・更新・削除）に利用
    - Subscriptionタイプ
      - リアルタイプの Read Operation に利用

- リゾルバ
  - スキーマの定義をもとにデータ処理をどのように行うのかを記述

- 型定義
  - Int や String がある
  - Int! や String! のように末尾に`!`を加えると`必須`を表す

# Typetalk-remind-bot

## 機能

コードの中で指定した日時に、Typetalkにメッセージを投稿してくれる

### 環境

言語:

JavaScript

OS:

Ubuntu18.04

シェル:

bash

$ node -v

v10.14.2

$ npm -v

6.4.1

### パッケージ

```
$ npm install node-cron
```

node-cronをインストール

```
$ npm install https
```

httpsをインストール

### 動かし方

Typetalkで投稿してほしい、トピックにbotアカウントをつくり、

コードにtopicIDとAPIトークンを埋め込み、

上のパッケージとNode.jsをインストールした環境で、

```
$ node script.js
```

を実行します。


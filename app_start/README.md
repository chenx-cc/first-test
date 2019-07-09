# 店舗業務デジタル化 管理者用タブレット
- author : y4-aoki

## 概要
店舗業務デジタル化プロジェクトで利用する管理者用タブレット

## 開発開始
### 各種バージョン
- ionic 3.9.2
- cordova 8.0.0

### install方法
- 下記ページを参考
- http://sd11.devcp.wwws.nri.co.jp/wiki/display/SEJBIZIT/Ionic+framework

## デプロイの仕方
### 前提条件
- プロキシ経由ではビルドが出来ない可能性あり

### 開発環境用ビルドコマンド
`ionic cordova build android`

### 本番環境用ビルドコマンド
`ionic cordova build android --prod`

### アプリ展開
#### APK直接配布する場合
- r1bizit.poc@gmail.comにメールを送る
- r1bizit.poc@gmail.comのドライブに入れる

#### デプロイゲートを使用する場合
下記コマンド
```
curl \
  -F "token=9a1646ce9dd2bb004e19a30fbbcf5bfed881a393" \
  -F "file=@★ここにapkのpath★" \
  -F "message=★ここにアップデートメッセージ★" \
  https://deploygate.com/api/users/r1bizit/apps
```

### トラブルシューティング
#### ビルド失敗1 
ビルド中に下記のようなエラーでビルドが終了する場合
```
:app:transformDexArchiveWithDexMergerForDebug FAILED
39 actionable tasks: 3 executed, 36 up-to-date
```
- cordova cleanしてプロキシ回避する

# npm install
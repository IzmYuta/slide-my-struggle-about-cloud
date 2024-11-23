---
theme: Seriph # https://sli.dev/themes/gallery.html
title: 自宅クラウドを作ってみて
download: false
lineNumbers: true
background: /img/galaxy-3608029_1920.jpg
class: 'text-center'
---

# 自宅クラウドを作ってみて

泉 祐汰


---
layout: default
---

# アジェンダ

- 自己紹介
- 作ったサービスの紹介
- 感想とか
- まとめ

---
layout: intro
background: /img/3230405_m.jpg
---

# 自己紹介

そもそも誰なのよ、ってハナシ


---
layout: two-cols
layoutClass: gap-16
---

# 自己紹介

- 名前：泉祐汰

- 所属コース：バックエンド

- 案件：PGWeb(バックエンド、PdM補佐)

- 大学：東京理科大学(25卒)

- 内定先：株式会社GINIEE

- 趣味：コーヒー、ゲーム全般

- 近況：研究テーマが「やっと」決まりました

::right::

<img h="100%" src="/img/84177730-BA7B-48B9-AC52-7B3C176E6756_4_5005_c.jpeg">


---
layout: default
---

# GINIEEについて

<v-click>

## 会社についての説明は社員さんに任せるとして...

</v-click>
<br>

<v-click>

## 入社の決め手：

</v-click>

<br>

<v-click>

### ・ 使用している技術の幅が広かったから

</v-click>

<v-click>

### ・ 経営理念に共感し、それが飾りでないと感じたから

</v-click>

<br><br>

<v-click>

↓詳しくは
<br>
[ホームページ](https://geniee.co.jp/)
<br>
[note](https://note.com/geniee_inc/)
<br>
[zenn](https://zenn.dev/p/geniee)


</v-click>

---
layout: intro
---

# 作ったサービスの紹介

PGCloud(仮)

---
layout: image-right
image: /img/opennebula.png
---

# PGCloud

<v-click>

## Is 何？

</v-click>
<br>

<v-click>

### ・数クリックでサーバーを構築

</v-click>

<br>

<v-click>

### ・任意のRAM、コア数

</v-click>

<br>

<v-click>

### ・PG生限定、基本無料で使い放題

</v-click>

<br>

<v-click>

### ・リッチな管理画面付き

</v-click>


<br><br>

<v-click>

↓詳しくは
<br>
[紹介ページ](https://speckled-shirt-113.notion.site/PGCloud-7a6177b25b9e4ae0ba341bcaffeefc47)

</v-click>

---
layout: center
---

# 説明するより見た方が早い
というわけでデモ


---
layout: intro
---

# 感想とか

ほんへ

---
layout: default
---

# ラインナップ

- 作ろうと思った理由
- 大変だったこと
- 自宅鯖を作るメリット
- 自分で使ってみて思ったこと
- 振り返り

---
layout: default
---

# 作ろうと思った理由

- テックコミュニティ？？
- Trapへの憧れ(某J氏の思い)

---
layout: image-right
image: "/img/スクリーンショット_2024-11-23_12_12_22.png"
---

# 作ろうと思った理由


<v-click>

## 時は2024年7月某日...

</v-click>

<br>

<v-click>

### 飯の投稿多くね？？

</v-click>

<br>

<v-click>

### テックコミュニティ🤔🤔

</v-click>

<br>

<v-click>

### PlayGroundをもっとGeekな感じにしたい...

</v-click>

<br>

<v-click>

### 東工大の技術サークル、traPのような！！

</v-click>
---
layout: default
---

# traP V.S. PlayGround
## traPのようになるには何が必要か...

<br>

|ツール種別|traP|PlayGround|
|---|---|---|
|<v-click> コミュニケーションツール </v-click> | <v-click> traQ </v-click> | <v-click> Discord / PGrit </v-click>|
|<v-click> ポートフォリオサービス </v-click>|<v-click> traPortfolio </v-click>| <v-click> HP / PG PORTFOLIO</v-click> |
|<v-click> イベント管理ツール </v-click>|<v-click> knoQ </v-click>| <v-click> Discord / PGWeb</v-click> |
|<v-click> 部内向けインフラ基盤 </v-click>|<v-click> NeoShowcase </v-click>| <v-click> 🤔</v-click> |

<br>

<v-click>

## → インフラ基盤を作ればいいんだ！！

</v-click>



---
layout: default
---

# いざ実践

- エラーとの戦い
- 何が原因かわからなくなる
- → 現実逃避(OSS探し)の旅に出る
- OpenNebulaとの出会い
- 足りないのはルーティングテーブルの設定だった
- CloudFlareは神

---
layout: default
---

# いざ実践


<v-click>

## ベースOSやインストールオプションの選択

</v-click>

<br>

<v-click>

### OS：Ubuntu

</v-click>

<br>

<v-click>

### → ネットに落ちている記事のほとんどがUbuntuだったから

</v-click>


<br>

<v-click>

### インストールオプション： kolla-ansible

</v-click>

<br>

<v-click>

### → 他のオプションはメンテされておらず、ドキュメントも古かったため

</v-click>


---
layout: default
---

# エラーとの戦い

## やり直しに時間がかかる
<br>

<v-click>

### OpenStackは超巨大なソフトウェア、構築に3時間かかる

</v-click>

<br>

<v-click>

### 失敗するたびにリセットコマンドを実行して、設定を見直して再構築

</v-click>

<br>

<v-click>

### たまにリセットにも失敗する、その時はOSから入れ直す

</v-click>


<br><br>

<v-click>

## それを丸1週間繰り返してやっと成功！

</v-click>

---
layout: image-right
image: "/img/スクリーンショット 2024-11-23 15.04.00.png
---

# 成功はした...が


<v-click>

### インスタンスに直接sshできない

</v-click>
<br>
<v-click>


### インスタンスから外部に通信不可

</v-click>

<v-click>

- NICが干渉している？

</v-click>
<v-click>

- PCのファイアウォール？

</v-click>
<v-click>

- ルーター？

</v-click>
<v-click>

- All-in-Oneだから？

</v-click>
<v-click>

- そもそも使い方を間違えている？

</v-click>

<br>

<v-click>

### 原因が多すぎてわからない

</v-click>


<br>
<v-click>

### OpenStackから逃げる

</v-click>


---
layout: default
---

# 俺が欲しかったもの

<br>
<v-click>

### ・短い環境構築

</v-click>
<br>
<v-click>

### ・シンプルで必要最低限の機能

</v-click>
<br>
<v-click>

### ・デザインがいい感じ

</v-click>
<br><br>
<v-click>

## そんな都合のいいものがあるのか...?

</v-click>


--- 
layout: cover
background: /img/galaxy-3608029_1920.jpg
---

# OpenNebula

---
layout: default
---
# OpenNebulaのここがすごい！

<v-click>

## 軽量&シンプル

</v-click>
<v-click>

- 1つのBashスクリプトをダウンロードするだけで準備完了

</v-click>
<v-click>

- 構築・破壊も1コマンドで実施可能

</v-click>
<v-click>

- 必要なリソースがOpenStackの66%

</v-click>

<br>
<v-click>

## 必要十分な機能群

</v-click>
<v-click>

- コンピューティング

</v-click>
<v-click>

- ネットワーク

</v-click>
<v-click>

- ストレージ

</v-click>
<v-click>

- IAM

</v-click>
<v-click>

- IDフェデレーション

</v-click>
<v-click>

- スケジューラ

</v-click>
<v-click>

- モニタリング

</v-click>
<v-click>

- オーバーコミット ...

</v-click>

---
layout: default
---

# そういえば

### インスタンスに直接sshできなかったのは？

<v-click>

- 僕がネットワークについて勘違いしていたから
- インスタンスに繋がるネットワークは、ルータに直接接続されているわけではない
- PCでポートフォワーディングをしないと認識できない

</v-click>

<br>

### インスタンスから外部に通信不可だったのは？
<v-click>

- ルーティングテーブルの設定の問題
- FORWARDが全てDROPされるようになっていた
- ACCEPTに変更することで通信できるようになった
- ただ、PCを再起動するとOpenNebulaによってDROPに戻される
- 悪いのはOpenNebulaか、自分の構成か

</v-click>

---
layout: default
---

# ポートフォワーディング

### この画像はマイクラ用の設定

<br>

- PCに対して、ポート番号25565に来た通信を、インスタンス(172.16.100.2:25565)に転送する、の意

<br>

<img  src="/img/スクリーンショット 2024-11-23 17.35.44.png">

---
layout: default
---

# ルーティングテーブル

- INPUT：サーバーに入ってくる通信
- OUTPUT：サーバーから出て行く通信
- FORWARD：受信したデータを他のサーバーへ転送する際に適用される

<br>

<img  src="/img/スクリーンショット 2024-11-23 17.29.28.png">

---
layout: center
---

# 自宅クラウド、完成！


---
layout: default
---

# 自宅鯖を作るメリット

- プロキシ完全に理解した
- ネットワーク完全に理解した
- 仮想化ってすげー
- ssh怖くない
- エラーに対する嗅覚(権限、ハードウェア依存か否か)が身に付く
- 研究室のPCのsshサーバー設定ができるようになった
- 役に立つか立たないかはわからない、だけど知ってるとそれだけでちょっと威張れたりもする

---
layout: default
---

# 使ってみて思ったこと

- そもそもAWS使えない状態で、PGCloud触るの無理くね？
- 微妙に仕様が違うせいで、PGCloudに慣れるとむしろ悪影響じゃね？
- 例え無料でも、停電や掃除で電源落ちるレベルの不安定さはダメじゃね？


---
layout: default
---

# 振り返り
- そもそも、無料で使いたいなら、AWS Educateアカウント作れば良くね？
- そもそも、traPでもちゃんとGeekしているのは上位勢だけらしい
- そもそも、Linuxサーバー使えて喜ぶの、俺だけ説
- そもそも、Geekであって欲しいのはなんでなの？
  - 道具の使い方を知るだけで満足して欲しくなかった
  - デプロイできた！で止まって欲しくない
  - その先のHowやWhyについて一緒に議論したかった


--- 
layout: two-cols
layoutClass: gap-16
---

# kpppn様の一言

:: right ::

<img h="80%" src="/img/スクリーンショット 2024-11-23 0.47.11.png">

---
layout: intro
---

# まとめ

ダンダスのダンス、ダンダンス

---
layout: default
---

# まとめ


<v-click>

### ・ 使われるものを作りたいなら市場・顧客調査をしっかりやろう

</v-click>

<br>

<v-click>

### ・ 目標は具体的に設定しよう

</v-click>

<br>

<v-click>

### ・ 信頼性には、膨大な手間と知識とお金がかけられていることを覚えておこう

</v-click>

<br>

<v-click>

### ・ お金はケチらず良いものに触れよう

</v-click>

<br>

<v-click>

### ・ 自宅鯖は別に作らなくてもいい

</v-click>

---
layout: center
---

# おわり

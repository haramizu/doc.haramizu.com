---
title: ライブラリのタイプについて
description: Sitecore Personalize の管理画面で 
sidebar:
  order: 2
publishDate: 2024-11-13
lastUpdated: 2024-11-13
---

Sitecore Personalize のテンプレートとして、同じようなデザインながらも Boxever Library および Sitecore Library と２つのパターンが用意されています。今回はそれぞれの違いを確認していきます。

## HTML コードでの違い

HTML のコードの違いを見るとわかります。コードが以下のように異なります。Corner Popup の Boxever Library のコードは以下のようになっています。

HTML

<!-- Use dynamic Guest variables, type ctrl+space or guest to explore available entities.-->
<!-- Type "d" to see decisioning helpers -->
<div id="bx-transition-card">
    <div class="img-container">
        <div class="img-container__image"></div>
    </div>
    <div class="bx-transition-card__body">
        <h3>[[Title | string | Title | {required:true, group: Title, order: 1}]]</h3>
        <p>[[Description | text | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt | {required:true, group: Description, order: 1}]]</p>
        <div class="options-container">
            <a id="bx-transition-card--secondary" class="options-container__secondary">[[Dismiss Text | string | No Thanks | {required:true, group: Secondary Button, order: 1}]]</a>
            <a id="bx-transition-card--primary" class="options-container__primary">[[CTA Text | string | Yes Please | {required:true, group: CTA Button, order: 1}]]</a>
        </div>
    </div>
</div>
続いて Sitecore Library を参照すると以下のようになっています。

HTML

<!-- Use dynamic Guest variables, type ctrl+space or guest to explore available entities.-->
<!-- Type "d" to see decisioning helpers -->
<div id="pers-transition-card">
    <div class="img-container">
        <div class="img-container__image"></div>
    </div>
    <div class="pers-transition-card__body">
        <h3>[[Title | string | Title | {required:true, group: Title, order: 1}]]</h3>
        <p>[[Description | text | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt | {required:true, group: Description, order: 1}]]</p>
        <div class="options-container">
            <a id="pers-transition-card--secondary" class="options-container__secondary">[[Dismiss Text | string | No Thanks | {required:true, group: Secondary Button, order: 1}]]</a>
            <a id="pers-transition-card--primary" class="options-container__primary">[[CTA Text | string | Yes Please | {required:true, group: CTA Button, order: 1}]]</a>
        </div>
    </div>
</div>
id のタグに関して、boxever library に対しては bx- で始まるように記載をしていますが、Sitecore Library では pers- で始まるように記述をしています。これは HTML に限らず CSS などでも同様の違いがあります。

動作の違いを確認する
すでに haramizu.com のサイトに対しては、Google Tag Manager を利用して Sitecore Engage SDK を利用したスクリプトを埋め込んであります。まず、Boxever Library で作成した Corner Popup の Experience をプレビューで表示したいと思います。

librarycode01.png
Preview を実行しても何も表示されす、QA Tool が立ち上がりますが、その中身を見ると以下のようなエラーが表示されています。

librarycode02.png
HTML など表示をするデータを取得できていない形です。そこで、今度は Sitecore Library を利用して確認をしてみます。

librarycode03.png
プレビューで表示すると、右下からポップアップが表示されて、また QA Tool で確認をしてもエラーが出ていません。

librarycode04.png
JavaScript の違い
実は tampermonkey のサンプルでは、以下の URL の JavaScript を読み込んでいました。

https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.1.min.js
一方、Sitecore Engage SDK を利用して Google Tag Manager を利用して読み込んでいる JavaScript の URL は以下のようになります。

https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.4.3.min.js
boxever の JavaScript のライブラリは既に Boxever もしくは Sitecore CDP + Personalize を導入しているお客様向けに提供しているものであり、新しく展開をするのであれば Sitecore Engage SDK を利用するのが良いでしょう。

まとめ
今回は用意されているテンプレートの２つのタイプの違いに関して紹介をしました。新規導入うであれば、Sitecore Library をベースにテンプレートを作成していくのが良いでしょう。
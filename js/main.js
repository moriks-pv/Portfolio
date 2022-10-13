//ローディング画面
$(function() {
    $(window).on('load',function(){
    $("#loading").delay(1700).fadeOut('slow');//ローディング画面を1.7秒（1700ms）待機してからフェードアウト
    $("#loading_box").delay(1200).fadeOut('slow');//ローディングテキストを1.2秒（1200ms）待機してからフェードアウト
  });
  });

  //ストロークアニメーション
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 110,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
}
);

setTimeout(function(){
    stroke.play();//SVGアニメーションの実行
},1700);//ローディング実行時間の後に開始



//グローバルナビゲーション固定
var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function(){if ($(window).width() > 640) {
    if ( jQuery( this ).scrollTop() > navPos ) {
        jQuery( 'body' ).css( 'padding-top', navHeight );
        jQuery( '#global-nav' ).addClass( 'm_fixed' );
    } else {
        jQuery( 'body' ).css( 'padding-top', 0 );
        jQuery( '#global-nav' ).removeClass( 'm_fixed' );
    }
}});

//スクロールフェードイン
$(function() {
    $(window).on('scroll resize', function() {
      var setHeight = 100;
      var wHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      $('.animate').each(function() {
        var targetPosition = $(this).offset().top;
        if(scrollTop > targetPosition - wHeight + setHeight) {
          $(this).addClass('show');
        }
      })
    });
  });


 /* $(".openbtn").click(function () {
    $(this).toggleClass('active');
});*/

$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#gnav_sp").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#gnav_sp a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#gnav_sp").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
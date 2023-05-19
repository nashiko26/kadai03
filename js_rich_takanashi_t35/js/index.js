// "use strict";

// ヘッダー装飾
const heading = document.querySelector("#heading");

const keyframes = {
  borderRadius: [
    "20% 50% 50% 70%/50% 50% 70% 50%",
    "50% 20% 50% 50%/40% 40% 60% 60%",
    "50% 40% 20% 40%/40% 50% 50% 80%",
    "50% 50% 50% 20%/40% 40% 60% 60%",
  ],
};
const options = {
  duration: 8000,
  direction: "alternate",
  iterations: Infinity,
};

heading.animate(keyframes, options);

// ボタンを押すと実行する処理
// 1.を押すと2.が押せる（disabledを取り除く）ように

function chi() {
  const elm = document.getElementsByClassName("janbtn");

  if (0 < elm.length) {
    [...elm].forEach((v) => v.removeAttribute("disabled"));
  }
}

// 画像が表示させる
var img;
function chiikawa() {
  img = document.getElementById("image_file");
  img.src = "/img/chiikawa.jpeg";
}

function hachiware() {
  img = document.getElementById("image_file");
  img.src = "/img/hachiaware.jpg";
}

function usagi() {
  img = document.getElementById("image_file");
  img.src = "/img/usagi.jpg";
}

// じゃんけんのリスト作成
function R_Click(p_janken_r) {
  //「R_Click()」に引数を入れて自分が選んだボタンによって結果を変える
  //自分（p-）
  let p_janken = ["グー", "チョキ", "パー"];

  //NPC
  let janken = ["グー", "チョキ", "パー"];
  let janken_r = Math.floor(Math.random() * 3);
  // 小数点切り捨てて整数に。0,1,2の3パターンを作成。NPC側は乱数を作成

  // 勝ち負け判定
  // 「if」もしも…　「else if」もしも上の条件以外で…
  if (janken_r === p_janken_r) {
    Result_end = "あいこ！";
  } else if (p_janken_r === 0 && janken_r === 1) {
    Result_end = "勝った～～～！！！";
  } else if (p_janken_r === 1 && janken_r === 2) {
    Result_end = "勝った～～～！！！";
  } else if (p_janken_r === 2 && janken_r === 0) {
    Result_end = "勝った～～～！！！";
  } else {
    Result_end = "残念！負け。";
  }

  // 結果
  // 「janken[janken_r]」「p_janken[p_janken_r]」ランダムに選択したどれかひとつ
  // 「Rejan1」「Rejan2」という指定したidの場所でプログラムを動かす
  // 「innerHTML」でHTMLのデータを書き換える
  document.getElementById("jankenpon").src = "/img/jan" + janken_r + ".png";
  document.getElementById("Rejan2").innerHTML = Result_end;
  document.getElementById("jankenpon2").src = "/img/jan" + p_janken_r + ".png"; // 画像
}

// 途中まで模索したコードたち
// ▼disabledの処理編
// function chiikawa() {
//   //前方一致で「janbtn」から始まるidを指定
//   // disabled属性＝HTML要素を無効化する属性
//   let unbuttonArray = $('[id^="janbtn"]');
//   //指定idを含む場合、非活性化
//   for (i = 0; i < unbuttonArray.length; i++) {
//     $("#" + unbuttonArray[i].id).prop("disabled", false);
//   }
// }

// $('#check').change(function() {
//   // チェックが入っていたら有効化
//   if ( $(this).is(':checked') ){
//       // ボタンを有効化
//       let unbuttonArray = $('[id^="janbtn"]');
//       for (i = 0; i < unbuttonArray.length; i++) {
//       $("#" + unbuttonArray[i].id).prop('disabled', false);
//   } else {
//       // ボタンを無効化
//       $('#button').prop('disabled', true);
//   }
// });

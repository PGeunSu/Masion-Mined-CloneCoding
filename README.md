# ๐Masion-Mined-CloneCoding

<br>

## ๐ฅ๏ธ ํ๋ก์ ํธ ์๊ฐ
๋ฉ์ข๋ฏธ๋ค๋๋ ์๋ฅ ๋ธ๋๋ ์น์ฌ์ดํธ ํด๋ก ์ฝ๋ฉ ํ๋ก์ ํธ ์๋๋ค. 
FrontEnd๋ก๋ง ๊ตฌํํ ์น ์ฌ์ดํธ ์๋๋ค.

<br>

> ๐บ ๐ฅ [๊ตฌํ ์์](https://drive.google.com/file/d/18bP6AHX7o_yM4BhmFJHR2rVx2iR1hczb/view?usp=sharing)

<br>

## ๐ ํ๋ก์ ํธ ๊ธฐ๊ฐ 
22.08.01 ~ 22.08.08 (1์ธ)

<br>

## โจ๏ธ ๊ฐ๋ฐ ํ๊ฒฝ
* OS : Window
* Tool : Visual Studio Code
* Front-End : Html, CSS, JavaSCript
* Back-End : X

<br>

## ๐ฑ๏ธ ๊ธฐ๋ฅ ๊ตฌํ
1. ๋ก๋ฉ์ฐฝ ๊ธฐ๋ฅ
2. ์๋ ์ฌ๋ผ์ด๋, ๋ฉ์ธํ๋ฉด ๋์์ ์ถ๋ ฅ
3. Nav๋ฐ ์ฌ๋ผ์ด๋
4. ํ๋ณด ์ปฌ๋ ์ ์ฌ๋ผ์ด๋ ๊ธฐ๋ฅ

<br>

## ๐ก ์์ธ ๊ธฐ๋ฅ ์ค๋ช ๐ก

### ๋ชฉ์
* [๋ฉ์ธํ๋ฉด](#-๋ฉ์ธํ๋ฉด)
* [๋ก๋ฉ์ฐฝ](#-๋ก๋ฉ์ฐฝ)
* [์ํ๋ชฉ๋ก](#-์ํ๋ชฉ๋ก)
* [์ปฌ๋ ์](#-์ปฌ๋ ์)
* [๋ก๊ทธ์ธ ๋ฐ ํ์๊ฐ์ ํ์ด์ง](#-๋ก๊ทธ์ธ-๋ฐ-ํ์๊ฐ์-ํ์ด์ง)

<br>

## ๐ ๋ฉ์ธํ๋ฉด
![แแฆแแตแซแแชแแงแซ](https://user-images.githubusercontent.com/110580350/210527612-84e396b2-59d6-46ac-8888-32f2f92a7055.gif)

### Swiper
```javaScript
ar swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
```

### ๋ฉ์ธ์์
```html
<video id="video" width="100%" height="auto" autoplay="" muted="" loop="" playsinline="">
        <source src="http://wer1199.cafe24.com/video/maisonmined/22SS/maison_banner.mp4" type="video/mp4" />
      </video><a href="/shop/best.html  " class="button">Go Shop Best Item</a>
```
<br>

## ๐ ๋ก๋ฉ์ฐฝ
![แแฉแแตแผแแกแผ](https://user-images.githubusercontent.com/110580350/210528099-cd020bf0-762a-4a7d-9ddc-6e4f27f98a1a.gif)

#### JavaScript
```javaScript
 $(window).load(function(){
    setTimeout(function(){
        $(".loading").fadeOut();
    },1000); //2์ด๋ค์ ๋ก๋ฉํ๋ฉด ์ ๊ฑฐ
    });
    
    //html
    <div class="loading"></div>
```

<br>

#### CSS
```css
.loading {
    position: fixed;
    width: 100%;
    background-color: #fff;
    height: 100%;
    z-index: 9999;
    background-image: url(../img/loding_img.gif);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    
  }
```

## ๐ ์ํ๋ชฉ๋ก
![nav แแตแแณแผ แแตแพ แแกแแตแแฆแท](https://user-images.githubusercontent.com/110580350/210528659-68af73fc-4d82-4f58-ba82-4e91a6a2cc7b.gif)

### nav ์ฌ๋ผ์ด๋ ๊ธฐ๋ฅ
```javaScript
//๋ฉ๋ด ๋ฒํผ ๋ฆฌํธ์ค ์ด๋ฒคํธ
$(document).ready(function () {
    $("#spreadBtn01").click(function () {
      if ($("#hiddenList01").is(":visible")) {
        $("#spreadBtn01").toggleClass("menu_btn close_btn");
        $("#hiddenList01").slideUp();
      } else {
        $("#spreadBtn01").toggleClass("close_btn menu_btn");
        $("#hiddenList01").slideDown();
      }
    });
  });
  
  //shop ๋ฒํผ ๋ฆฌ์คํธ ์ด๋ฒคํธ
  $(document).ready(function () {
    $("#spreadBtn1_1").click(function () {
      if ($("#hiddenList1_1").is(":visible")) {
        $("#hiddenList1_1").slideUp();
      } else {
        $("#hiddenList1_1").slideDown();
      }
    });
  });
```

### ์ํ๋ชฉ๋ก
```html
 <ul class="list">
                <li class="item">
                    <div class="box">
                        <div class="img">
                            <img src="/img/shop/best/1.jpg">
                        </div>
                        <div class="info">
                            <span class="name">TWO POCKET BACKPACK (16th re-order)</span>
                            <span class="price">KRW 84,200</span>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="box">
                        <div class="img">
                            <img src="/img/shop/best/2.jpg">
                        </div>
                        <div class="info">
                            <span class="name">TWO BUCKLE MESSENGER BAG (19th re-order)</span>
                            <span class="price">KRW 92,600</span>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="box">
                        <div class="img">
                            <img src="/img/shop/best/3.jpg">
                        </div>
                        <div class="info">
                            <span class="name">BLACK OVER MA-1</span>
                            <span class="price">KRW 202,100</span>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="box">
                        <div class="img">
                            <img src="/img/shop/best/4.jpg">
                        </div>
                        <div class="info">
                            <span class="name">BLACK DOUBLE LONG GOOSE DOWN</span>
                            <span class="price">KRW 278,600</span>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="box">
                        <div class="img">
                            <img src="/img/shop/best/5.jpg">
                        </div>
                        <div class="info">
                            <span class="name">RE BIKER BAG</span>
                            <span class="price">KRW 65,900</span>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="box">
                        <div class="img">
                            <img src="/img/shop/best/6.jpg">
                        </div>
                        <div class="info">
                            <span class="name">BLACK WASHED DENIM TRUKER</span>
                            <span class="price">KRW 167,100</span>
                        </div>
                    </div>
                </li>
                
                .
                .
                .
                
```

## ๐ ์ปฌ๋ ์
![แแฅแฏแแฆแจแแงแซ](https://user-images.githubusercontent.com/110580350/210530160-97c88582-c9b7-41d6-9b58-fb74ceacb656.gif)

### ๋ฉ์ธํ์ด์ง

```html
<div id="fullpage">
        <div class="section active" id="section0">
            <a href="/collection/first.html"><img src="/img/collection/1/1_3.jpg"></a>
        </div>
        <div class="section" id="section1">
            <a href="/collection/second.html"><img src="/img/collection/2/03.jpg"></a>
        </div>
        <div class="section" id="section2">
            <a href="/collection/third.html"><img src="/img/collection/3/01.jpg"></a>
        </div>
        <div class="section" id="section3">
            <a href="/collection/fourth.html"><img src="/img/collection/4/01.jpg"></a>
        </div>
        <div class="section" id="section4">
            <a href="/collection/fifth.html"><img src="/img/collection/5/09.jpg"></a>
        </div>
    </div>
```

### ์์ธ ํ์ด์ง
```json
{ //collection.json
    "tags": [
      "swiper"
    ],
    "name": "Swiper - Navigation",
    "dependencies": {
      "swiper": "latest",
      "parcel-bundler": "^1.6.1"
    }       
}
```
```html
<!-- Swiper -->
  <div class="swiper mySwiper">
    <!--๋ซ๊ธฐ ๋ฒํผ-->
    <a href="/collection/collMain.html" class="slide_close"><img src="/img/collection/close_btn.png"></a>
    <div class=" swiper-wrapper">
      <div class="swiper-slide"><img src="/img/collection/1/1_3.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_4.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_5.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_6.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_7.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_8.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_9.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_10.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_11.jpg"></div>
      <div class="swiper-slide"><img src="/img/collection/1/1_12.jpg"></div>

    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

  <!-- Swiper JS -->
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

  <!-- Initialize Swiper -->
  <script>
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  </script>
  <script src="/js/collection.json"></script>
```

### ์ธ๋ถ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
* [FullPage ๋งํฌ](https://github.com/alvarotrigo/fullPage.js)
```javaScript
 <script type="text/javascript" src="/js/scrolloverflow.js"></script>

    <script type="text/javascript" src="/js/jquery.fullPage.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('#fullpage').fullpage({
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
            });
        });
```
<br>

## ๐ ๋ก๊ทธ์ธ ๋ฐ ํ์๊ฐ์ ํ์ด์ง
![แแฉแแณแแตแซ แแตแพ แแฌแแฏแซแแกแแตแธ แแฆแแตแแต](https://user-images.githubusercontent.com/110580350/210532031-2e5082e6-5043-49c2-92cd-38da1f66fc9a.gif)

Front ๊ธฐ๋ฅ๋ง ๊ตฌํํ์๊ธฐ ๋๋ฌธ์ ๋ก๊ทธ์ธ ๊ธฐ๋ฅ์ ์์ต๋๋ค.

### ์ ๊ท์ ์ฒดํฌ
```javaScript
//์ ๊ท ํํ์
function check() {

  let member_id = document.getElementById("member_id"); //์์ด๋
  let passwd = document.getElementById("passwd"); // ๋น๋ฐ๋ฒํธ
  let user_passwd_confirm = document.getElementById("user_passwd_confirm"); //๋น๋ฐ๋ฒํธ ์ฌ์๋ ฅ
  let nameContents = document.getElementById("nameContents"); // ์ด๋ฆ
  let mobile1 = document.getElementById("mobile1"); //ํธ๋ํฐ ๋ฒํธ ๊ฐ์ด๋ฐ ์๋ฆฌ
  let mobile2 = document.getElementById("mobile2"); // ํธ๋ํฐ ๋ฒํธ ๋์๋ฆฌ
  let email1 = document.getElementById("email1"); //์ด๋ฉ์ผ
  let bank_account_owner = document.getElementById("bank_account_owner"); //์๊ธ์ฃผ
  let bank_account_no = document.getElementById("bank_account_no"); //๊ณ์ข๋ฒํธ


  //์์ด๋ ์ ๊ท์
  let idChk = /^[a-z0-9]{4,12}$/; //4~12์๋ฆฌ๋ก ์์ด๋๋ฅผ ์์ฑ ๊ฐ๋ฅ

  // ๋น๋ฐ๋ฒํธ ์ ๊ท์
  let pwChk = /^[A-Za-z0-9]{4,16}$/; //๋/์๋ฌธ์, ์ซ์๋ก 4~16์๋ฆฌ ๋น๋ฐ๋ฒํธ ์์ฑ ๊ฐ๋ฅ

  // ์ด๋ฆ, ์๊ธ์ฃผ ์ ๊ท์
  let nameChk = /^[๊ฐ-ํฃ]{2,6}$/; //๊ฐ~ํฃ ํ๊ธ๋ก ์ด๋ฃจ์ด์ง ๋ฌธ์๋ก๋ง 2~6์๋ฆฌ ์ด๋ฆ ์์ฑ ๊ฐ๋ฅ

  // ์ด๋ฉ์ผ ๊ฒ์ฌ ์ ๊ท์
  let mailChk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //ํน์๋ฌธ์๊ฐ ๊ฐ๋ฅํ๋ฉฐ ์ค์์ @ ํ์, .๋ค์ 2~3๊ธ์๊ฐ ํ์ํ๋ค.
  //ํธ๋ํฐ ๋ฒํธ ์ ๊ท์
  let numberChk = /^d{4}/; //4์๋ฆฌ๋ง ์๋ ฅ ๊ฐ๋ฅ

  //๊ณ์ข๋ฒํธ ์ ๊ท์
  let bankNumChk = /^d{12,14}/; // ์ซ์ 12~14 ์๋ฆฌ ์๋ ฅ ๊ฐ๋ฅ
```
### ์ ํจ์ฑ ๊ฒ์ฌ
```javaScript
if (!idChk.test(member_id.value)) {
    alert("์์ด๋๋ 4~12์๋ฆฌ๋ก ์ค์ ํด์ฃผ์ธ์.");
    member_id.focus();
    return false;
  }
  if (!pwChk.test(passwd.value)) {
    alert("๋น๋ฐ๋ฒํธ๋ ๋/์๋ฌธ์, ์ซ์ ํฌํจ 4~16์๋ฆฌ๋ก ์ค์ ํด์ฃผ์ธ์.");
    passwd.focus();
    return false;
  }
  if (passwd.value !== user_passwd_confirm.value) {
    alert("๋น๋ฐ๋ฒํธ๊ฐ ์ผ์นํ์ง ์์ต๋๋ค.");
    user_passwd_confirm.focus();
    return false;
  }
  if (!nameChk.test(nameContents.value)) {
    alert("ํ๊ธ 2~6์๋ก ์๋ ฅํด์ฃผ์ธ์.");
    nameContents.focus();
    return false;
  }
  if (!numberChk.test(mobile1.value)) {
    alert("๋ฒํธ๋ 4์๋ฆฌ๋ง ์๋ ฅ ๊ฐ๋ฅํฉ๋๋ค.");
    mobile1.focus();
    return false;
  }
  if (!numberChk.test(mobile2.value)) {
    alert("๋ฒํธ๋ 4์๋ฆฌ๋ง ์๋ ฅ ๊ฐ๋ฅํฉ๋๋ค");
    mobile2.focus();
    return false;
  }
  if (!mailChk.test(email1.value)) {
    alert("์ด๋ฉ์ผ ํ์์ ๋ง์ง ์์ต๋๋ค.");
    email1.focus();
    return false;
  }
  if (!nameChk.test(bank_account_owner.value)) {
    alert("์๊ธ์ฃผ๋ 2~6์๋ก ์๋ ฅํด์ฃผ์ธ์");
    bank_account_owner.focus();
    return false;
  }
  if (!bankNumChk.test(bank_account_no.value)) {
    alert("๊ณ์ข๋ฒํธ๋ 12~14์๋ฆฌ๋ก ์๋ ฅํด์ฃผ์ธ์.");
    bank_account_no.focus();
    return false;
  }
```








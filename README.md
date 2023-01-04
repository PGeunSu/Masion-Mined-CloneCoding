# 🌐Masion-Mined-CloneCoding

<br>

## 🖥️ 프로젝트 소개
메종미네드란 의류 브랜드 웹사이트 클론코딩 프로젝트 입니다. 
FrontEnd로만 구현한 웹 사이트 입니다.

<br>

> 📺 🎥 [구현 영상](https://drive.google.com/file/d/18bP6AHX7o_yM4BhmFJHR2rVx2iR1hczb/view?usp=sharing)

<br>

## 📅 프로젝트 기간 
22.08.01 ~ 22.08.08 (1인)

<br>

## ⌨️ 개발 환경
* OS : Window
* Tool : Visual Studio Code
* Front-End : Html, CSS, JavaSCript
* Back-End : X

<br>

## 🖱️ 기능 구현
1. 로딩창 기능
2. 자동 슬라이드, 메인화면 동영상 출력
3. Nav바 슬라이드
4. 화보 컬렉션 슬라이드 기능

<br>

## 💡 상세 기능 설명 💡

### 목자
* [메인화면](#-메인화면)
* [로딩창](#-로딩창)
* [상품목록](#-상품목록)
* [컬렉션](#-컬렉션)
* [로그인 및 회원가입 페이지](#-로그인-및-회원가입-페이지)

<br>

## 📖 메인화면
![메인화면](https://user-images.githubusercontent.com/110580350/210527612-84e396b2-59d6-46ac-8888-32f2f92a7055.gif)

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

### 메인영상
```html
<video id="video" width="100%" height="auto" autoplay="" muted="" loop="" playsinline="">
        <source src="http://wer1199.cafe24.com/video/maisonmined/22SS/maison_banner.mp4" type="video/mp4" />
      </video><a href="/shop/best.html  " class="button">Go Shop Best Item</a>
```
<br>

## 📖 로딩창
![로딩창](https://user-images.githubusercontent.com/110580350/210528099-cd020bf0-762a-4a7d-9ddc-6e4f27f98a1a.gif)

#### JavaScript
```javaScript
 $(window).load(function(){
    setTimeout(function(){
        $(".loading").fadeOut();
    },1000); //2초뒤에 로딩화면 제거
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

## 📖 상품목록
![nav 기능 및 아이템](https://user-images.githubusercontent.com/110580350/210528659-68af73fc-4d82-4f58-ba82-4e91a6a2cc7b.gif)

### nav 슬라이드 기능
```javaScript
//메뉴 버튼 리트스 이벤트
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
  
  //shop 버튼 리스트 이벤트
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

### 상품목록
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

## 📖 컬렉션
![컬렉션](https://user-images.githubusercontent.com/110580350/210530160-97c88582-c9b7-41d6-9b58-fb74ceacb656.gif)

### 메인페이지

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

### 상세 페이지
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
    <!--닫기 버튼-->
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

### 외부 라이브러리
* [FullPage 링크](https://github.com/alvarotrigo/fullPage.js)
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

## 📖 로그인 및 회원가입 페이지
![로그인 및 회원가입 페이지](https://user-images.githubusercontent.com/110580350/210532031-2e5082e6-5043-49c2-92cd-38da1f66fc9a.gif)

Front 기능만 구현하였기 때문에 로그인 기능은 업습니다.

### 정규식 체크
```javaScript
//정규 표현식
function check() {

  let member_id = document.getElementById("member_id"); //아이디
  let passwd = document.getElementById("passwd"); // 비밀번호
  let user_passwd_confirm = document.getElementById("user_passwd_confirm"); //비밀번호 재입력
  let nameContents = document.getElementById("nameContents"); // 이름
  let mobile1 = document.getElementById("mobile1"); //핸드폰 번호 가운데 자리
  let mobile2 = document.getElementById("mobile2"); // 핸드폰 번호 끝자리
  let email1 = document.getElementById("email1"); //이메일
  let bank_account_owner = document.getElementById("bank_account_owner"); //예금주
  let bank_account_no = document.getElementById("bank_account_no"); //계좌번호


  //아이디 정규식
  let idChk = /^[a-z0-9]{4,12}$/; //4~12자리로 아이디를 생성 가능

  // 비밀번호 정규식
  let pwChk = /^[A-Za-z0-9]{4,16}$/; //대/소문자, 숫자로 4~16자리 비밀번호 생성 가능

  // 이름, 예금주 정규식
  let nameChk = /^[가-힣]{2,6}$/; //가~힣 한글로 이루어진 문자로만 2~6자리 이름 생성 가능

  // 이메일 검사 정규식
  let mailChk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //특수문자가 가능하며 중앙에 @ 필수, .뒤에 2~3글자가 필요하다.
  //핸드폰 번호 정규식
  let numberChk = /^d{4}/; //4자리만 입력 가능

  //계좌번호 정규식
  let bankNumChk = /^d{12,14}/; // 숫자 12~14 자리 입력 가능
```
### 유효성 검사
```javaScript
if (!idChk.test(member_id.value)) {
    alert("아이디는 4~12자리로 설정해주세요.");
    member_id.focus();
    return false;
  }
  if (!pwChk.test(passwd.value)) {
    alert("비밀번호는 대/소문자, 숫자 포함 4~16자리로 설정해주세요.");
    passwd.focus();
    return false;
  }
  if (passwd.value !== user_passwd_confirm.value) {
    alert("비밀번호가 일치하지 않습니다.");
    user_passwd_confirm.focus();
    return false;
  }
  if (!nameChk.test(nameContents.value)) {
    alert("한글 2~6자로 입력해주세요.");
    nameContents.focus();
    return false;
  }
  if (!numberChk.test(mobile1.value)) {
    alert("번호는 4자리만 입력 가능합니다.");
    mobile1.focus();
    return false;
  }
  if (!numberChk.test(mobile2.value)) {
    alert("번호는 4자리만 입력 가능합니다");
    mobile2.focus();
    return false;
  }
  if (!mailChk.test(email1.value)) {
    alert("이메일 형식에 맞지 않습니다.");
    email1.focus();
    return false;
  }
  if (!nameChk.test(bank_account_owner.value)) {
    alert("예금주는 2~6자로 입력해주세요");
    bank_account_owner.focus();
    return false;
  }
  if (!bankNumChk.test(bank_account_no.value)) {
    alert("계좌번호는 12~14자리로 입력해주세요.");
    bank_account_no.focus();
    return false;
  }
```








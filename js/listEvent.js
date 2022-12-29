
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

  //footer 버튼 리스트 이벤트
  $(document).ready(function () {
    $("#spreadBtn02").click(function () {
      if ($("#hiddenList02").is(":visible")) {
        $("#spreadBtn02").toggleClass("menu_icon close_btn");
        $("#hiddenList02").slideUp();
      } else {
        $("#spreadBtn02").toggleClass("close_btn menu_icon");
        $("#hiddenList02").slideDown();
      }
    });
  });


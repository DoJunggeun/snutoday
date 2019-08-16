<!DOCTYPE html>
<html>
<title>오늘 이거 하나요?</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
<style>
  body,
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family:  'Noto Sans KR', Raleway', sans-serif
  }

  .w3-third img {
    margin-bottom: -6px;
    opacity: 0.8;
    cursor: pointer
  }

  .w3-third img:hover {
    opacity: 1
  }
</style>

<body class="w3-light-grey w3-content" style="max-width:1600px">
  ​
  <!-- Overlay effect when opening sidebar on small <scr></scr>eens -->
  <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
  ​
  <!-- !PAGE CONTENT! -->
  <div class="w3-main" style="margin-left:300px">
    ​
    <!-- Push down content on small screens -->
    <div class="w3-hide-large" style="margin-top:83px"></div>

    <!-- About section -->
    <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
      <h4><b>제작자 소개</b></h4>
      <img src="./img/profile.jpg" alt="Me" class="w3-image w3-padding-32" width="600" height="650">
      <div class="w3-content w3-justify" style="max-width:600px">
        <h4>도정근</h4>
        <p>학생회 하다가 심심해서 만들었습니다. <br />사실 학생회 하다가, 주변 친구들이 물어보면 여기로 보내려고 만들었습니다.<br />여러분도 지금 셔틀 하는지, 지금 식당 하는지, 지금 매점 하는지 궁금하잖아요? <br />추후 서울대 부근 음식점, 주점으로 서비스 범위를 확대할 계획입니다.
        </p>
        <p>mail: jg.do@snu.ac.kr</p>
        <hr class="w3-opacity">
        <h4 class="w3-padding-16">웹 개발 기술</h4> <!-- 약력으로 바꾸자 -->
        <p class="w3-wide">웹 프로그래밍</p>
        <div class="w3-white">
          <div class="w3-container w3-padding-small w3-center w3-grey" style="width:12%">12%</div>
        </div>
        <p class="w3-wide">일러스트레이터</p>
        <div class="w3-white">
          <div class="w3-container w3-padding-small w3-center w3-grey" style="width:10%">10%</div>
        </div>
        <p class="w3-wide">웹 디자인</p>
        <div class="w3-white">
          <div class="w3-container w3-padding-small w3-center w3-grey" style="width:7%">7%</div>
        </div>
        <p class="w3-wide">포토샵</p>
        <div class="w3-white">
          <div class="w3-container w3-padding-small w3-center w3-grey" style="width:6%">6%</div>
        </div>
        <p><button class="w3-button w3-light-grey w3-padding-large w3-margin-top w3-margin-bottom">Download Resume</button></p>
        <hr class="w3-opacity">
      </div>
    </div>


    <!-- Pagination
        <div class="w3-center w3-padding-32">
      <div class="w3-bar">
        <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
        <a href="#" class="w3-bar-item w3-black w3-button">1</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
      </div>
    </div>
-->
    <!-- Modal for full size images on click-->
    <div id="modal01" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
      <span class="w3-button w3-black w3-xlarge w3-display-topright">×</span>
      <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" class="w3-image">
        <p id="caption"></p>
      </div>
    </div>



    <!-- End page content -->
  </div>

  <script>
    // Script to open and close sidebar
    function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    }

    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
    }

    // Modal Image Gallery
    function onClick(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    }
  </script>


</body>

</html>

function hgmeal2() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 11 && date.getHours() < 13) || (date.getHours() == 13 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 14 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />(9출분식)<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function hgmeal() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && ((date.getHours() >= 17 && date.getHours() < 19) || (date.getHours() >= 12 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() > 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 10) || (date.getHours() >= 11 && date.getHours() < 16) || (date.getHours() >= 17 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if (date.getDay() > 0 && date.getDay() < 6) {
    if (date.getHours() < 8) {
      return '<span style="color:red;">운영종료<br />'+gett(8,0)+'분남음<span>';
    } else if (date.getHours() >= 10 && date.getHours() < 11) {
      return '<span style="color:red;">운영종료<br />'+gett(11,0)+'분남음<span>';
    } else if (date.getHours() >= 16 && date.getHours() < 17) {
      return '<span style="color:red;">운영종료<br />'+gett(17,0)+'분남음<span>';
    }
  } else if (date.getDay() == 0 || date.getDay() == 6) {
    if (date.getHours() <= 11) {
      return '<span style="color:red;">운영종료<br />'+gett(11,30)+'분남음<span>';
    } else if (date.getHours() >= 14 && date.getHours() < 17) {
      return '<span style="color:red;">운영종료<br />'+gett(17,0)+'분남음<span>';
    }
  }
}

function nsmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function dormmeal() {
  var date = new Date();
  if ((date.getHours() == 8) || (date.getHours() == 12) || (date.getHours() == 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if (date.getMinutes() < 30 && ((date.getHours() == 9) || (date.getHours() == 13) || (date.getHours() == 19))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if (date.getMinutes() > 30 && ((date.getHours() == 11) || (date.getHours() == 17) || (date.getDay() > 0 && date.getDay() < 6 && date.getHours() == 7))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function eng302meal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() > 11 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() > 15) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function eng301meal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function nhmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function dwgmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function edumeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function artmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() > 11 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() > 30) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function gongmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if (date.getHours() >= 11 && date.getHours() < 19) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function meal220() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() >= 17 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function ggmeal() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getHours() >= 11 && date.getHours() < 14) || (date.getHours() >= 17 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function gett(hour, minute){
  var h = hour;
  var m = minute;
  var date = new Date();
  var geth = hour - date.getHours();
  var getm = minute - date.getMinutes();
  if (geth < 0) {
    return '오늘은끝';
  } else if (getm < 0) {
    getm = getm + 60;
    geth = geth - 1;
    getm = getm + geth * 60;
    return getm;
  }
}

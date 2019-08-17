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
  console.log(date.getDay(), date.getHours(), date.getMinutes(), date.getDate());
  if ((date.getDay() == 0 || date.getDay() == 6) && ((date.getHours() >= 17 && date.getHours() < 19) || (date.getHours() >= 12 && date.getHours() < 14) || (date.getHours() == 11 && date.getMinutes() > 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 10) || (date.getHours() >= 11 && date.getHours() < 16) || (date.getHours() >= 17 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
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

function musicnn() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만<br />운영</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(19, 0) + '분후종료</span>';
  } else if (date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(9, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function jhynn() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만<br />운영</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 19) || (date.getHours() == 8 && date.getMinutes() >= 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(19, 0) + '분후종료</span>';
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 30) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}


function cafe104() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만<br />운영</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 8 && date.getMinutes() >= 30) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(18, 30) + '분후종료</span>';
  } else if (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 30) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function moaart() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만<br />운영</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 17)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(17, 0) + '분후종료</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function tea() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만<br />운영</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 10 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(17, 30) + '분후종료</span>';
  } else if (date.getHours() < 10) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(10, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function lannn() {
  var date = new Date();
  if ((date.getDay() == 6) && ((date.getHours() > 9 && date.getHours() < 16) || (date.getHours() == 9 && date.getMinutes() >= 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(16, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(19, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(9, 30) + '분후시작</span>';
  } else if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function dwgnn() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 16)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(16, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() > 8 && date.getHours() < 19) || (date.getHours() == 8 && date.getMinutes() >= 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(19, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8 || (date.getHours() == 8 && date.getMinutes() < 30))) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 30) + '분후시작</span>';
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(9, 0) + '분후시작</span>';
  } else if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function belepi() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 8 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(18, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(20, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else if (date.getDay() == 6 && date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function eyagi() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(18, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(19, 30) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 00) + '분후시작</span>';
  } else if (date.getDay() == 6 && date.getHours() < 10) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(10, 0) + '분후시작</span>';
  } else if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function snack() {
  var date = new Date();
  if ((date.getDay() == 6) && ((date.getHours() >= 8 && date.getHours() < 15) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(15, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(19, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(7, 30) + '분후시작</span>';
  } else if (date.getDay() == 6 && (date.getHours() < 7 || (date.getHours() == 7 && date.getMinutes() >= 30))) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(7, 30) + '분후시작</span>';
  } else if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function vetsnack() {
  var date = new Date();
  if ((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 14)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(14, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br />' + gett(19, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(9, 0) + '분후시작</span>';
  } else if (date.getDay() == 6 && date.getHours() < 9) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(9, 0) + '분후시작</span>';
  } else if (date.getDay() == 0) {
    return '<span style="color:red;">일요일은<br />운영안함</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function libnn() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 11 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(19, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(19, 30) + '분후종료</span>';
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 11)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(11, 0) + '분후시작</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function fluid() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 10 && date.getHours() < 15)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(15, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && ((date.getHours() >= 8 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(19, 30) + '분후종료</span>';
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 10)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(10, 0) + '분후시작</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 8)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function twosome() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(22, 0) + '분후종료</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function pascucci() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(22, 0) + '분후종료</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}
function hollys() {
  var date = new Date();
  if (date.getHours() >= 8 && date.getHours() < 22) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(22, 0) + '분후종료</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(8, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

function quiz() {
  var date = new Date();
  if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(19, 0) + '분후종료</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() >= 7 && date.getHours() < 20)) {
    return '<span style="color:blue;font-weight:bold;">운영중<br/>' + gett(20, 0) + '분후종료</span>';
  } else if ((date.getDay() == 0 || date.getDay() == 6) && (date.getHours() < 9)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(9, 0) + '분후시작</span>';
  } else if ((date.getDay() > 0 && date.getDay() < 6) && (date.getHours() < 7)) {
    return '<span style="color:red;">미운영</span><br /><span style="color:green;font-weight:bold;">' + gett(7, 0) + '분후시작</span>';
  } else {
    return '<span style="color:red;">운영종료<br />오늘은끝</span>';
  }
}

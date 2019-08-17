function ststation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만합니다<span>';
  } else if (date.getHours() > 19 || date.getHours() < 8) {
    return '<span style="color:red;">운행종료<span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<span>';
  }
}

function stdhd() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만합니다<span>';
  } else if (date.getHours() > 8 || date.getHours() < 8) {
    return '<span style="color:red;">운행종료<span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<span>';
  }
}

function stsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만합니다<span>';
  } else if (date.getHours() > 9 || date.getHours() < 8) {
    return '<span style="color:red;">운행종료<span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<span>';
  }
}

function stinner() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만합니다<span>';
  } else if (date.getHours() > 17 || date.getHours() < 8) {
    return '<span style="color:red;">운행종료<span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<span>';
  }
}

function stnight() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">평일에만합니다<span>';
  } else if (date.getHours() > 23 && date.getMinutes() > 10 || date.getHours() < 21) {
    return '<span style="color:red;">운행종료<span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<span>';
  }
}

function ststationinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '운행종료';
  } else if (date.getHours() > 19 || date.getHours() < 8) {
    return '운행종료';
  } else if (date.getHours() == 8) {
    return '5~10분';
  } else if (date.getHours() == 9 || date.getHours() == 10) {
    return '10분';
  } else if (date.getHours() >= 11 || date.getHours() < 16) {
    return '5~7분';
  } else if (date.getHours() == 18 && date.getHours() >= 16) {
    return '10~15분';
  }
}

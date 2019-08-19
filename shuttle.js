function ststation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() >= 19) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() == 19) {
    return '<span style="color:blue;font-weight:bold;">학교→설입<br />운행중<br />19시까지</span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />19시까지</span>';
  }
}

function stdhd() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 8) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />9시까지</span>';
  }
}

function stsdstation() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 9) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />10시까지</span>';
  }
}

function stinner() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 17) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 8) {
    return '<span style="color:red;">미운행</span><br /><span style="color:green;font-weight:bold;">8시부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />18시까지</span>';
  }
}

function stnight() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '<span style="color:red;">주말에는<br />운행안함<span>';
  } else if (date.getHours() > 23 && date.getMinutes() > 10) {
    return '<span style="color:red;">운행종료<span>';
  } else if (date.getHours() < 21 || ((date.getHours() == 21) && (date.getMinutes() < 10))) {
    return '<span style="color:red;font-weight:bold;">미운행</span><br /><span style="color:green;font-weight:bold;">21시10분부터</span>';
  } else {
    return '<span style="color:blue;font-weight:bold;">운행중<br />23시10분까지<span>';
  }
}

function ststationinterval() {
  var date = new Date();
  if (date.getDay() == 0 || date.getDay() == 6) {
    return '운행안함';
  } else if (date.getHours() > 19 || date.getHours() < 8) {
    return '운행안함';
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

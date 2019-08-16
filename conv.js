function hgconv() {
  var date = new Date();
  if ((date.getDate() == 0 || date.getDate() == 6) && (date.getHours() >= 8 && date.getHours()) < 19) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function hgmg() {
  var date = new Date();
  if ((date.getDate() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function jdCU() {
  var date = new Date();
  if ((date.getDate() == 0 || date.getDate() == 6) && (date.getHours() >= 8 && date.getHours() < 20)) {
  return '<span style="color:blue;font-weight:bold;">운영중<span>';
} else if ( (date.getDate() > 0 || date.getDate() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
  return '<span style="color:blue;font-weight:bold;">운영중<span>';
} else {
  return '<span style="color:red;">운영종료<span>';
}
}

function nsconv() {
  var date = new Date();
  if (date.getDate() == 0 || date.getDate() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && ((date.getHours() >= 10 && date.getHours() < 19) || (date.getHours() == 19 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function snuplex() {
  var date = new Date();
  if (date.getDate() == 0 || date.getDate() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && ((date.getHours() >= 9 && date.getHours() < 18) || (date.getHours() == 18 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function dwgconv() {
  var date = new Date();
  if ((date.getDate() == 6) && (date.getHours() >= 9 && date.getHours() < 17)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && ((date.getHours() >= 8 && date.getHours() < 17) || (date.getHours() == 17 && date.getMinutes() < 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function eeoconv() {
  var date = new Date();
  if (date.getDate() == 0 || date.getDate() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && (date.getHours() >= 9 && date.getHours() < 19)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function engCU() {
  var date = new Date();
  if ((date.getDate() == 0 || date.getDate() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
  return '<span style="color:blue;font-weight:bold;">운영중<span>';
} else if ( (date.getDate() > 0 || date.getDate() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
  return '<span style="color:blue;font-weight:bold;">운영중<span>';
} else {
  return '<span style="color:red;">운영종료<span>';
}
}

function cnsconv() {
  var date = new Date();
  if ((date.getDate() == 6) && (date.getHours() >= 10 && date.getHours() < 17)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && ((date.getHours() >= 9 && date.getHours() < 20) || (date.getHours() == 8 && date.getMinutes() > 30))) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function dormconv() {
  var date = new Date();
  if ((date.getHours() >= 8 && date.getHours() < 24) || date.getHours() == 0 || date.getHours() == 1 || (date.getHours() == 1 && date.getMinutes() < 30)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function vetconv() {
  var date = new Date();
  if (date.getDate() == 0 || date.getDate() == 6) {
    return '<span style="color:red;">운영종료<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

function medconv() {
  var date = new Date();
  if ((date.getDate() == 6) && (date.getHours() >= 9 && date.getHours() < 18)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else if ((date.getDate() > 0 || date.getDate() < 6) && (date.getHours() >= 8 && date.getHours() < 22)) {
    return '<span style="color:blue;font-weight:bold;">운영중<span>';
  } else {
    return '<span style="color:red;">운영종료<span>';
  }
}

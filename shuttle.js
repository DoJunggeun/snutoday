function ststation() {
  var date = new Date();
  if (date.getDate == 0 || date.gatDate == 6) {
    return '미운행';
  } else if (date.getHours() > 19 || date.getHours() < 8) {
    return '미운행';
  } else {
    return '운행중';
  }
}

function stdhd() {
  var date = new Date();
  if (date.getDate == 0 || date.gatDate == 6) {
    return '미운행';
  } else if (date.getHours() > 8 || date.getHours() < 8) {
    return '미운행';
  } else {
    return '운행중';
  }
}

function stsdstation() {
  var date = new Date();
  if (date.getDate == 0 || date.gatDate == 6) {
    return '미운행';
  } else if (date.getHours() > 9 || date.getHours() < 8) {
    return '미운행';
  } else {
    return '운행중';
  }
}

function stinner() {
  var date = new Date();
  if (date.getDate == 0 || date.gatDate == 6) {
    return '미운행';
  } else if (date.getHours() > 17 || date.getHours() < 8) {
    return '미운행';
  } else {
    return '운행중';
  }
}

function stnight() {
  var date = new Date();
  if (date.getDate == 0 || date.gatDate == 6) {
    return '미운행';
  } else if (date.getHours() > 23 && date.getMinutes() > 10 || date.getHours() < 21) {
    return '미운행';
  } else {
    return '운행중';
  }
}

function ststationinterval() {
  var date = new Date();
  if (date.getDate == 0 || date.gatDate == 6) {
    return '미운행';
  } else if (date.getHours() > 19 || date.getHours() < 8) {
    return '미운행';
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

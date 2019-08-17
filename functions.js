function gett(hour, minute) {
  var h = hour;
  var m = minute;
  var date = new Date();
  var geth = hour - date.getHours();
  var getm = minute - date.getMinutes();
  getm = getm + geth * 60;
  return getm;
}

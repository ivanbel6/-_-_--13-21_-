var privat = document.getElementsByClassName('privat');
function truncate(str, maxlength) {
  if(str.length > maxlength) {
  str = str.substr(0, maxlength-3) + '…';
}
  return str;
}
var maxlenght = 100;
  for(i = 0; i < privat.length; i++) {
    privat[i].innerHTML = truncate(privat[i].innerHTML, maxlenght);
}
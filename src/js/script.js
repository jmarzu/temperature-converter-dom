console.log('dom content in progress');

document.addEventListener('DOMContentLoaded', function() {
  console.log('dom loader');

var suby = document.getElementById('subBtn');

suby.addEventListener('click', function(event) {
  event.preventDefault();
  var fair = document.getElementById('numInput').value;
  document.getElementById('outputTemp').innerHTML = fairChange(fair);

});

var subyC = document.getElementById('subBtnCel');

subyC.addEventListener('click', function(event) {
  event.preventDefault();
  var cel = document.getElementById('numInput').value;
  document.getElementById('outputTemp').innerHTML = celChange(cel);
});

var fairChange = function(fair) {
  return ((fair * (9/5)) + 32);
}

var celChange = function(cel) {
  return ((cel - 32) + (5/9));
}

});

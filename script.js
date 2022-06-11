for (let i = 0; i < 1000; i++) {
    
setInterval(function() {
  window.scrollTo(0, document.body.scrollHeight);
}, 3000);
}

for (let i = 0; i < 1000; i++) {
var confirmButtons = document.querySelectorAll('button[value=Confirm]');
for (var x = 0; x < confirmButtons.length; x++) {
  setTimeout(function(confirmButtons, x) {    
    confirmButtons[x].firstChild.click();
  }, x * 2000, confirmButtons, x); // we're passing x
}
}

for (let i = 0; i < 100; i++) {
    setTimeout(function() {
        var confirmButtons = document.querySelectorAll('button[value=Confirm]');
        for (var x = 0; x < confirmButtons.length; x++) {
          setTimeout(function(confirmButtons, x) {    
            confirmButtons[x].firstChild.click();
          }, x * 5000, confirmButtons, x); // we're passing x
        }
    }, i * 30000);
}

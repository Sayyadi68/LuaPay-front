var MovetoRight = document.getElementById("transform");
var x = 0;

var interval = setInterval(function() {

    x = x+280;
    MovetoRight.style.transform = "translatex("+ x +"px)"; 
   
    if (x == 6720) {
        x=0;
    }

},5000)


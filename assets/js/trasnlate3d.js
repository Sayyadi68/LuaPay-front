var MovetoRight = document.getElementById("transform");

// var i = 0;

// do {

//   task(i);
//   i++;

// } while (i <= 26);


// function task(i) {

//     setInterval(function() {
        
        // MovetoRight.style.transform = "translatex("+ 450*i +"px)"; 
        // MovetoRight.style.transition = "all 0.25s ease 0s;"; 

//         if (i == 26) {
//             console.log(i)
           
//         }    

//     }, 1000 * i );
    
// }


var x = 0;

var interval = setInterval(function() {

    x = x+280;
    MovetoRight.style.transform = "translatex("+ x +"px)"; 
   
    if (x == 6720) {
        x=0;
    }

},5000)
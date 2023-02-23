var progbarright = document.getElementById("progbar-right");
var progbarleft = document.getElementById("progbar-left");
var titeldata = document.getElementById("titel-data");


if( titeldata.innerHTML < 50 ){
    progbarleft.style.transform = 'rotate(' + titeldata.innerHTML*3.6  + 'deg)';
    progbarright.classList.add("d-none");
}

if( titeldata.innerHTML >= 50 ){
    progbarleft.style.transform = 'rotate(' + 180 + 'deg)';
    progbarright.classList.remove("d-none");
}

if( titeldata.innerHTML > 50 ){

    progbarright.classList.remove("d-none");

    progbarleft.style.transform = 'rotate(' + 180 + 'deg)';
    
    setTimeout(function() {
        progbarright.style.transform = 'rotate(' + [titeldata.innerHTML*3.6 ] + 'deg)';
    },1000)


}
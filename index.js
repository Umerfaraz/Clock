var center = document.querySelector(".center");

// var date = new date ();
setInterval( function () {
    var date = new Date();
    // clock.innerHtml = date.toLocaleTimeString();
    center.innerHTML = date.toLocaleTimeString();
    
},1000)
 
  
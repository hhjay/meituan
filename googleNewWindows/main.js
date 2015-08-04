window.onload = function() {
    // if ( (window.location.href).indexOf('https://www.google.com.hk/') >= 0 ) {
    //     alert(window.location.href);
    //     var con = document.querySelectorAll("#rso .g");
    //     var root = document.getElementById('rso');
    //     root.addEventListener("click", function(ev){
    //         if ( ev.target.nodeName === "A" ) {
    //             ev.preventDefault();
    //             ev.stopPropagation();
    //             console.log(this.className);
    //             this.target = "_blank";
    //         };
    //     }, false);
    //     console.log(con);
    // }

}
$(document).ready(function() {
    if ( window.location.origin == "https://www.google.com.hk" ) {
        var a = document.querySelectorAll("#rcnt a");
        console.log(a);
        for (var i = 0; i < a.length; i++) {
            console.log(a[i].href);
            a[i].setAttribute("onmousedown", "return true");
            a[i].setAttribute("target", "_blank");
        };
        // console.log(a.length);
        // for (var i = 0; i < a.length; i++) {
        //     console.log(i+" "+a[i].target);
        // };
    }
    // document.onkeydown = function(ev) {
    //     // 18 alt
    //     // 39 ->
    //     if ( ev.which == 39 ) {
    //         alert("ev.keyCode");
    //     };
    // }
});



// body.addEventListener("click" ,function(ev){
//     alert("ev");
// }, false);

/*ajax before http://stackoverflow.com/questions/16463177/javascript-on-before-and-after-every-ajax-call*/

function init(){
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    var t4 = document.getElementById("t4");
    var t5 = document.getElementById("t5");
    var t6 = document.getElementById("t6");
    var t7 = document.getElementById("t7");
    var t8 = document.getElementById("t8");

    var a1=document.getElementById("a1");
    var a2=document.getElementById("a2");
    var a3=document.getElementById("a3");
    var a4=document.getElementById("a4");
    var a5=document.getElementById("a5");
    var a6=document.getElementById("a6");
    var a7=document.getElementById("a7");
    var a8=document.getElementById("a8");

        t1.style.display = "block";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";

    a1.onclick = function (){
       t1.style.display = "block";
       t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
    }

    a2.onclick = function (){
        t1.style.display = "none";
        t2.style.display = "block";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
    }

    a3.onclick = function (){
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "block";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
    }

    a4.onclick = function (){
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "block";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
    }

    a5.onclick = function (){
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "block";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
    }

    a6.onclick = function (){
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "block";
        t7.style.display = "none";
        t8.style.display = "none";
    }

    a7.onclick = function (){
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "block";
        t8.style.display = "none";
    }

    a8.onclick = function (){
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "block";
    }

    var pre = document.querySelector("#pre");
    var next = document.querySelector("#next");


}

function tool() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) ;
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}

var btn = document.getElementById("btnInicio");

btn.addEventListener('scroll', scrollFunction())

// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
    } else {
    btn.style.display = "none";
    }
}


function voltaInicio() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
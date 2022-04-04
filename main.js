// const myBtn = document.querySelector('.dropbtn')

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
            console.log("salam")
            openDropdown.classList.remove('show');
        }
        // else {
        //     event.target.parentElement.querySelector('div').classList.add('show')
        //     // openDropdown.classList.add('show');
        // }
    }
    if (event.target.className == 'dropbtn') {
        console.log(event.target)
        // var dropdowns = document.getElementsByClassName("dropdown-content");

        // for (let i = 0; i < dropdowns.length; i++) {
        //     var openDropdown = dropdowns[i];

        //     if (openDropdown.classList.contains('show')) {
        //         console.log("salam")
        //         openDropdown.classList.remove('show');
        //     }
        //     // else {
        //     //     event.target.parentElement.querySelector('div').classList.add('show')
        //     //     // openDropdown.classList.add('show');
        //     // }
        // }
        if (event.target.parentElement.querySelector('div').className.includes('show')) {
            event.target.parentElement.querySelector('div').classList.remove('show')
        }
        else {
            event.target.parentElement.querySelector('div').classList.add('show')
        }
    }


}













// Scroll Back To Top Button


var mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// items

$(document).ready(function () {

    $('.items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
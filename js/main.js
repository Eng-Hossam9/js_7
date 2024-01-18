var maxLength = 100;
window.onload = function () {

    countTime("5 october 2024 9:56:00");
}
$(".openNav").click(function () {
    $("#Menu").animate({ width: '250px' }, 100)
    $("#home-content").animate({ marginLeft: '250px' }, 100)
})

$(".closebtn").click(function () {
    $("#Menu").animate({ width: '0px' }, 100)
    $("#home-content").animate({ marginLeft: '0px' }, 100)
})

$("#Menu a").click(function (e) {

    var section = $(e.target).attr("href");

    var targetSection = $(section).offset().top;

    $("html , body").animate({ scrollTop: targetSection }, {
        duration: 1500,
        queue: false
    });

})

$('#Acordion .toggle').click(function (e) {
    $('.inner').not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
});

$('textarea').keyup(function (e) {
    var textentered = $(e.target).val().length;
    var remaining = maxLength - textentered;
    if (remaining <= 0) {
        $("#chars").text("your available character finished");

    }
    else {

        $("#chars").text(remaining);
    }
});

function countTime(countTo) {

    let currentDay = new Date();
    let countDate = new Date(countTo);
    countDate = (countDate.getTime() / 1000);
    currentDay = (currentDay.getTime() / 1000);
    time = countDate - currentDay;
    let days = Math.floor(time / (24 * 60 * 60));
    let hours = Math.floor((time - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((time - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((time - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countTime(countTo); }, 1000);
}
// console.log(document);
// console.log($(document));

$(document).ready(function() {
    console.log('ready - 문서의 DOM이 완성되면 실행되는 이벤트')
})

$(function() {
    console.log("js 방법2");
})

//마우스 이벤트
//.hello요소를 클릭하면 function()함수를 실행해!
$('.hello').click(function() {
    $('.hello').css('color','red');
})

$('.num').click(function() {
    // $('.num').css('color','blue');
    $(this).css({'color': 'blue', 'font-weight': 'bold'});
})

$('.num').on('click', function() {
    $(this).css({'color': 'blue', 'font-weight': 'bold'});
})

$('.num').mouseover(function() {
    $(this).css({'color': 'green', 'font-weight': 'bold'});
})

$('.num').mouseleave(function() {
    $(this).css('color', 'black');
})

$('.hover').hover(function() {
    $(this).css("color", "red");
}, function() {
    $(this).css("color", "blue");
})

$(window).scroll(function() {
    console.log('scroll')
})

//=============

$('.input-key').keydown(function(e) {
    // console.log(e.code)
    if(e.code === 'ArrowUp') {
        console.log('up');
    } else if(e.code === 'ArrowRight') {
        console.log('right'
        )
    } else if(e.code === 'ArrowLeft') {
        console.log('left')
    } else if (e.code === 'ArrowDown') {
        console.log("down")
    } else {
        console.log(e.code)
    }
})

$('#todo-form').submit(function(e) {
    e.preventDefault();
    const todo = $('input[name=todo]').val();
    $('.todos').append(`<li>${todo}</li>`);
    $('input[name=todo').val('')
})
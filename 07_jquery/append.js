function appendJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.innerHTML = '마지막 자식'

    ul.append(li)
}

function appendJquery() {
    $('.colors').append('<li>jquery 자식추가</li>')
}

function prependJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.innerHTML = '첫 자식'

    ul.prepend(li)
}

function prependJquery() {
    $('.colors').prepend('<li>jquery 자식추가</li>')
}

function beforeJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.innerHTML = ''

    ul.before(li)
}

function beforeJquery() {
    $('.green').after('<li>after추가다</li>');
}


function removejs() {
    let li = document.querySelector('ul');
    li.remove()
}

function removejquery() {
    $('#li2').remove()
}

function emptyjs() {
    let ul = document.querySelector('ul');
    ul.innerHTML = ''
}

function emptyjquery() {
    $('ul').empty()
}

function findParent() {
    console.log($('.child2').parent())
}

function findParents() {
    console.log($('.child2').parents())
}

function findNext() {
    console.log($('.child2').next())
}

function findPrev() {
    console.log($('.child2').prev())
}

function findChildren() {
    console.log($('.child2').children())
}

function addClass() {
    $('.origin-class').addClass('add-class');
}

function addClassJs() {
    let p = document.querySelector('.origin-class');
    p.classList.add('add-class');

}

function removeClass() {
    $('.origin-class').removeClass('add-class');
}

function removeClassJs() {
    let p = document.querySelector('.origin-class');
    p.classList.remove('add-class');
}

function hasClass() {
    console.log($('.origin-class').hasClass('origin-class'));
}

function hasClassJs() {
    let p = document.querySelector('.origin-class');
    console.log(p.classList.contains('origin-class'));
}

function toggleClass() {
    $('.origin-class').toggleClass('add-class');
}

function toggleClassJs() {
    let p = document.querySelector('.origin-class');
    p.classList.toggle('add-class');
}




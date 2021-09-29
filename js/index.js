// Your code goes here
const links = document.querySelectorAll('links');
const funBus = document.querySelector('.intro img');
const funBusIntro = document.querySelector('.intro h2');
let scale = 1;
const funBusP = document.querySelector('.intro p');
const letsGo = document.querySelector('content-section h2');
const destination = document.querySelector('.content-destination');
const footer = document.querySelector('.footer');

// mouseover
Array.from(document.links).forEach(link => {
    link.addEventListener('mouseenter', function(event) {
        event.target.style.color = "purple";
        setTimeout(function() {
            event.target.style.color= "";
        }, 400);
    }, false);
})

// click
funBus.addEventListener('click', event => {
    console.log("Changing the background color");
    event.target.style.backgroundColor = "red";
})

// keydown
function escKey(event) {
    if (event.key === "Escape") {
        console.log("the keydown works");
    }
}
document.addEventListener('keydown', escKey);


// wheel
function zoom (event) {
    if (event.deltaY < 0) {
        scale *= event.deltaY * -2;
    } else {
        scale /= event.deltaY * 2;
    }
    scale = Math.min(Math.max(.5, scale), 4);
    funBusIntro.style.transform = `scale(${scale})`;
}
document.addEventListener('wheel', zoom);

// focus
funBusP.addEventListener('focus', (event) => {
    event.target.style.background = 'orange';
}, true);

// blur
funBusP.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

// copy
letsGo.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toString());
    event.preventDefault();
    console.log('it copied');
});

// paste
destination.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();

    const selection = window.getSelection();
    if (!selection.rangeCount) returns false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
});

// scroll
let scrollPosition = 0;
let ticking = false;

function scroll(scroll_pos) {

}
window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if(!ticking) {
        window.requestAnimationFrame(function() {
            scroll(scrollPosition);
            ticking = false;
        });
        
        ticking = true;
    }
});

// cut
footer.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
});
// email 클릭하면 copy 되기
const header = document.querySelector('.header');

const goTop = document.querySelector('.go-top');
const goTopSign = goTop.querySelector('.go-top__sign');

const cgvImage = document.querySelector('.projects-image-cgv');
const cgvCover = cgvImage.querySelector('.image-cover-cgv');
const cgvMore = cgvImage.querySelector('.image-cover-cgv__btn');
const cgvModal = document.querySelector('.projects-modal-cgv');
const cgvClose = cgvModal.querySelector('.projects-modal-cgv__close');

const mallImage = document.querySelector('.projects-image-mall');
const mallCover = mallImage.querySelector('.image-cover-mall');
const mallMore = mallImage.querySelector('.image-cover-mall__btn');
const mallModal = document.querySelector('.projects-modal-mall');
const mallClose = mallModal.querySelector('.projects-modal-mall__close');

// go top
goTop.addEventListener("mouseenter", function () {
    goTopSign.style.display = "block";
})
goTop.addEventListener("mouseleave", function () {
    goTopSign.style.display = "none";
})
goTop.addEventListener("click", function () {
    goTop.classList.add('rotate');
    window.scrollTo(0, 0);
    setTimeout(function () {
        goTop.classList.remove('rotate');
    }, 1500);
})

// 프로젝트 이미지 호버
cgvImage.addEventListener("mouseover", function () {
    cgvCover.style.opacity = "1";
})
cgvImage.addEventListener("mouseleave", function () {
    cgvCover.style.opacity = "0";
})

mallImage.addEventListener("mouseover", function () {
    mallCover.style.opacity = "1";
})
mallImage.addEventListener("mouseleave", function () {
    mallCover.style.opacity = "0";
})

// 프로젝트 모달창
cgvMore.addEventListener("click", function (e) {
    e.preventDefault();
    cgvModal.classList.add('slide-animate');
    // document.body.classList.add('noscroll');
    goTop.style.display = "none";

    disableScrolling();
})
cgvClose.addEventListener("click", function () {
    cgvModal.classList.remove('slide-animate');
    // document.body.classList.remove('noscroll');
    goTop.style.display = "block";

    enableScrolling();
})

mallMore.addEventListener("click", function (e) {
    e.preventDefault();
    mallModal.classList.add('slide-animate');
    // document.body.classList.add('noscroll');
    goTop.style.display = "none";

    disableScrolling();
})
mallClose.addEventListener("click", function () {
    mallModal.classList.remove('slide-animate');
    // document.body.classList.remove('noscroll');
    goTop.style.display = "block";

    enableScrolling();
})


// 헤더 바 그림자
document.addEventListener("scroll", function () {
    let top = window.pageYOffset;
    if (top === 0) {
        header.classList.remove("box-shadow-add");
    } else {
        header.classList.add("box-shadow-add");
    }
})

// scroll 막기
function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}
// scroll 허용
function enableScrolling() {
    window.onscroll = function () { };
}



// 이스터에그
console.log('%c          ', 'font-size: 100px; background: url(https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif) no-repeat; background-size: contain;');
console.log("I know you'll like me ♡");

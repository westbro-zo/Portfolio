// email 클릭하면 copy 되기
const header = document.querySelector('.header');

const goTop = document.querySelector('.go-top');
const goTopSign = goTop.querySelector('.go-top__sign');

const cgvImage = document.querySelector('.projects-image-cgv');
const cgvCover = cgvImage.querySelector('.image-cover-cgv');
const cgvMore = cgvImage.querySelector('.image-cover-cgv__btn');
const cgvModal = document.querySelector('.projects-modal-cgv');
const cgvClose = cgvModal.querySelector('.projects-modal-cgv__close');

const cgvMvp = cgvModal.querySelector('.cgv-mvp');
const cgvTech = cgvModal.querySelector('.cgv-tech');
const cgvRole = cgvModal.querySelector('.cgv-role');
const cgvMvpWrap = cgvModal.querySelector('.cgv-mvp__wrap');
const cgvTechWrap = cgvModal.querySelector('.cgv-tech__wrap');
const cgvRoleWrap = cgvModal.querySelector('.cgv-role__wrap');

const mallImage = document.querySelector('.projects-image-mall');
const mallCover = mallImage.querySelector('.image-cover-mall');
const mallMore = mallImage.querySelector('.image-cover-mall__btn');
const mallModal = document.querySelector('.projects-modal-mall');
const mallClose = mallModal.querySelector('.projects-modal-mall__close');

const mallMvp = mallModal.querySelector('.mall-mvp');
const mallTech = mallModal.querySelector('.mall-tech');
const mallRole = mallModal.querySelector('.mall-role');
const mallMvpWrap = mallModal.querySelector('.mall-mvp__wrap');
const mallTechWrap = mallModal.querySelector('.mall-tech__wrap');
const mallRoleWrap = mallModal.querySelector('.mall-role__wrap');


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
    document.body.classList.add('stop-scrolling');
    cgvClose.style.display = "block";
    // disableScrolling();
})
cgvClose.addEventListener("click", function () {
    cgvTechWrap.classList.remove('give-max-height');
    cgvRoleWrap.classList.remove('give-max-height');
    cgvMvpWrap.classList.remove('give-max-height');
    cgvModal.classList.remove('slide-animate');
    document.body.classList.remove('stop-scrolling');
    cgvClose.style.display = "none";
    // enableScrolling();
})

mallMore.addEventListener("click", function (e) {
    e.preventDefault();
    mallModal.classList.add('slide-animate');
    document.body.classList.add('stop-scrolling');
    mallClose.style.display = "block";
})
mallClose.addEventListener("click", function () {
    mallTechWrap.classList.remove('give-max-height');
    mallRoleWrap.classList.remove('give-max-height');
    mallMvpWrap.classList.remove('give-max-height');
    mallModal.classList.remove('slide-animate');
    document.body.classList.remove('stop-scrolling');
    mallClose.style.display = "none";
})

// cgv 모달 컨텐트
cgvMvp.addEventListener("click", function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 768) {
    } else {
        cgvMvpWrap.classList.toggle('give-max-height');
        cgvTechWrap.classList.remove('give-max-height');
        cgvRoleWrap.classList.remove('give-max-height');
        // cgvMvpWrap.classList.toggle('give-height');
    }
})

cgvTech.addEventListener("click", function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 768) {
    } else {
        cgvTechWrap.classList.toggle('give-max-height');
        cgvMvpWrap.classList.remove('give-max-height');
        cgvRoleWrap.classList.remove('give-max-height');
        // cgvMvpWrap.classList.toggle('give-height');
    }
})

cgvRole.addEventListener("click", function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 768) {
    } else {
        cgvRoleWrap.classList.toggle('give-max-height');
        cgvMvpWrap.classList.remove('give-max-height');
        cgvTechWrap.classList.remove('give-max-height');
        // cgvMvpWrap.classList.toggle('give-height');
    }
})

// mall 모달 컨텐트
mallMvp.addEventListener("click", function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 768) {
    } else {
        mallMvpWrap.classList.toggle('give-max-height');
        mallTechWrap.classList.remove('give-max-height');
        mallRoleWrap.classList.remove('give-max-height');
        // cgvMvpWrap.classList.toggle('give-height');
    }
})

mallTech.addEventListener("click", function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 768) {
    } else {
        mallTechWrap.classList.toggle('give-max-height');
        mallMvpWrap.classList.remove('give-max-height');
        mallRoleWrap.classList.remove('give-max-height');
        // cgvMvpWrap.classList.toggle('give-height');
    }
})

mallRole.addEventListener("click", function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 768) {
    } else {
        mallRoleWrap.classList.toggle('give-max-height');
        mallMvpWrap.classList.remove('give-max-height');
        mallTechWrap.classList.remove('give-max-height');
        // cgvMvpWrap.classList.toggle('give-height');
    }
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
// function disableScrolling() {
//     var x = window.scrollX;
//     var y = window.scrollY;
//     window.onscroll = function () { window.scrollTo(x, y); };
// }
// // scroll 허용
// function enableScrolling() {
//     window.onscroll = function () { };
// }



// 이스터에그
console.log('%c          ', 'font-size: 100px; background: url(https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif) no-repeat; background-size: contain;');
console.log("I know you'll like me ♡");

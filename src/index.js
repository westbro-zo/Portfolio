// email 클릭하면 copy 되기
const header = document.querySelector('.header');

const goTop = document.querySelector('.go-top');
const goTopSign = goTop.querySelector('.go-top__sign');

const cgvImage = document.querySelector('.projects-image-cgv');
const cgvCover = cgvImage.querySelector('.image-cover-cgv');
const cgvMore = cgvImage.querySelector('.image-cover-cgv__btn');
const cgvFold = document.querySelector('.projects__fold-cgv');
const cgvDescription = document.querySelector('.projects__description-cgv');

const mallImage = document.querySelector('.projects-image-mall');
const mallCover = mallImage.querySelector('.image-cover-mall');
const mallMore = mallImage.querySelector('.image-cover-mall__btn');
const mallFold = document.querySelector('.projects__fold-mall');
const mallDescription = document.querySelector('.projects__description-mall');


goTop.addEventListener("mouseenter", function () {
    goTopSign.style.display = "block";
})
goTop.addEventListener("mouseleave", function () {
    goTopSign.style.display = "none";
})
goTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

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

document.addEventListener("scroll", function () {
    let top = window.pageYOffset;
    if (top === 0) {
        header.classList.remove("box-shadow-add");
    } else {
        header.classList.add("box-shadow-add");
    }
})

cgvMore.addEventListener("click", function () {
    // projectDescriptionCgv.classList.add("display-block");
    cgvDescription.style.display = "block";
    cgvMore.style.display = "none";
})
cgvFold.addEventListener("click", function () {
    cgvDescription.style.display = "none";
    cgvMore.style.display = "block";
})

mallMore.addEventListener("click", function () {
    // projectDescriptionCgv.classList.add("display-block");
    mallDescription.style.display = "block";
    mallMore.style.display = "none";
})
mallFold.addEventListener("click", function () {
    mallDescription.style.display = "none";
    mallMore.style.display = "block";
})
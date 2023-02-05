// Local Storage

let mainColor = localStorage.getItem("color-option");
let randomBackground = document.querySelectorAll(".setting .setting-content span");
let page = document.querySelector(".landing");
let imagesArr = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6", "img-7", "img-8", "img-9", "img-0"];

let colorsLi = document.querySelectorAll(".colors-list li");

let backgroundDefaultImages = document.querySelectorAll(".landing .landing-background img");

let backgroundInterval;

// mainColor Of The Website
if (mainColor != null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    randomBackground.forEach(r => {
        r.style.backgroundColor = mainColor;
    })
    colorsLi.forEach(e => {
        if (e.dataset.color === mainColor) {
            colorsLi.forEach(z => {
                z.classList.remove("active");
            })
            e.classList.add("active");

        }
    })
}
let backgroundOption = true;

// Random Backgound
function randomizeImgs() {
    if (backgroundOption === true) {

        backgroundInterval = setInterval(function () {

            let randomNum = Math.floor(Math.random() * imagesArr.length);

            page.style.backgroundImage = 'url("/images/' + imagesArr[randomNum] + '.jpg")';

        }, 3000);
    }
}

// randomizeImgs();

let backgroundLocalItem = localStorage.getItem("background-option");
if (backgroundLocalItem != null) {

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;

    }
    else {

        backgroundOption = false;

    }

    if (backgroundLocalItem == 'true') {
        document.querySelector(".random-background .yes").classList.add("active");
    }
    else {
        document.querySelector(".random-background .no").classList.add("active");
    }
}

randomBackground.forEach(span => {
    span.classList.remove("active");
    span.addEventListener("click", (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

        });

        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background-option", true);
        }
        else {
            backgroundOption = false;
            clearInterval(backgroundInterval)
            localStorage.setItem("background-option", false);
        }
    })

})


backgroundDefaultImages.forEach(img => {
    img.onclick = function () {
        backgroundDefaultImages.forEach(image => {
            image.classList.remove("border");
        })
        page.style.backgroundImage = 'url("' + img.src + '")';
        img.classList.add("border");
    }
})

// Start setting Bage
let icon = document.querySelector(".setting .icon-setting .fa-gear");
let settingBox = document.querySelector(".setting");
icon.onclick = function () {
    settingBox.classList.toggle("open");
    icon.classList.toggle("fa-spin");
    icon.classList.toggle("open");

}
// End setting Bage
// Switch Color


colorsLi.forEach(e => {
    e.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);
        randomBackground.forEach(r => {
            r.style.backgroundColor = e.target.dataset.color;
        })
    })
    e.onclick = function () {
        colorsLi.forEach(x => {
            x.classList.remove("active");
        })
        e.classList.add("active");
    }
});
// Start Landing Bage

let headerLink = document.querySelectorAll("header .links li a");
headerLink.forEach(e => {
    e.onclick = function () {
        headerLink.forEach(e => {
            e.classList.remove("active");
        })
        e.classList.add("active");
    }
})

// End Landing Bage

// Start Skills Section
let skillsProgress = document.querySelectorAll(".skills .skill-box .skill-progress span");
skillsProgress.forEach(e => {
    e.style.width = e.dataset.progress;
});

// Start Gallary
let gallaryImages = document.querySelectorAll(".gallary img");
gallaryImages.forEach(img => {
    img.addEventListener("click", function (e) {
        let popOverlay = document.createElement('div');
        popOverlay.className = 'pop-overlay';

        document.body.appendChild(popOverlay);
        console.log(img.alt);
        let popUP = document.createElement('div');
        popUP.className = 'pop-up';


        let popupImg = document.createElement("img");
        popupImg.src = img.src;
        popUP.appendChild(popupImg);
        document.body.appendChild(popUP);

        if (img.alt !== null) {
            let popupHeader = document.createElement("h4");
            let imageText = document.createTextNode(img.alt);
            popupHeader.appendChild(imageText);
            popUP.appendChild(popupHeader);
            popupImg.style.height = "90%";
        } else {
            popupImg.style.height = "100%";
        }

        let colseWindow = document.createElement("span");
        colseWindow.innerHTML = "x";
        colseWindow.className = "close";
        popUP.appendChild(colseWindow);

        colseWindow.onclick = function () {
            popUP.remove();
            popOverlay.remove();
        }
    })
})

/* Start Timeline */
let timeline = document.querySelector(".timeline");
let timelineSpans = document.querySelectorAll(".timeline span");
timelineSpans.forEach(span => {
    span.onclick = function () {

        timelineSpans.forEach(e => {

            e.classList.remove("active");
        })

        span.classList.add("active");
    }

})

/* End Timeline */
// Start bullets 
let allBullets = document.querySelectorAll(".bullet");
let allLinks = document.querySelectorAll(".links a");

function scrollTOSomewhere(elements) {
    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'

            });

        });
    });
}

scrollTOSomewhere(allBullets);
scrollTOSomewhere(allLinks)

// Handle Active CLass


// Toggole Menu

let toggoleButton = document.querySelector(".link-container .toggole-menu");

let toggoleLinks = document.querySelector(".links");

toggoleButton.onclick = function (e) {

    e.stopPropagation();
    this.classList.toggle("menu-active");
    toggoleLinks.classList.toggle("display");
}

document.addEventListener("click", (e) => {
    if (e.target !== toggoleButton && e.target !== toggoleLinks) {

        if (toggoleLinks.classList.contains("display")) {
            toggoleButton.classList.remove("menu-active");
            toggoleLinks.classList.remove("display");
        }
    }
})

toggoleLinks.onclick = function (e) {
    e.stopPropagation();

}

/*  Scroll bar and button*/

let scrollProcess = document.querySelector(".scroll-process");

let Height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scrollProcess.style.width = `${(scrollTop / Height) * 100}%`;
})

let scrollButton = document.querySelector(".scrolltop-button");

window.onscroll = function () {
    if (this.scrollY > (document.documentElement.clientHeight)) {
        scrollButton.classList.add("show");
    }
    else {
        scrollButton.classList.remove("show");
        
    }
}

scrollButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });


    const fixed = document.querySelector("#fixed-image");
    const elemC = document.querySelector("#elem-container");
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });
    var elements = document.querySelectorAll(".elem");
    elements.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
    const titleParts = document.querySelectorAll('#title-part');
    const titleImg = document.querySelector("#part1-right");
    const titleDesc = document.querySelector("#left-desc");

    var pic = titleImg.getAttribute("data-img");
    titleImg.style.backgroundImage = `url(${pic})`;

    var description = titleDesc.getAttribute("data-desc");
    titleDesc.textContent = description;

    // Set the first title-part to clicked color by default
    const firstTitle = titleParts[0];
    firstTitle.querySelector('#title').classList.add('clicked');
    firstTitle.querySelector('#line').classList.add('clicked');

    titleParts.forEach(function (part) {
        part.addEventListener('click', function () {
            titleDesc.classList.remove('fade-out');
            titleDesc.classList.remove('fade-in');
            titleImg.classList.remove('fade-out');
            titleImg.classList.remove('fade-in');
            // Remove the 'clicked' class from all elements
            titleParts.forEach(function (otherPart) {
                otherPart.querySelector('#title').classList.remove('clicked');
                otherPart.querySelector('#line').classList.remove('clicked');

            });

            // Add the 'clicked' class to the clicked element
            const title = part.querySelector('#title');
            const line = part.querySelector('#line');
            title.classList.add('clicked');
            line.classList.add('clicked');
            titleDesc.classList.add('fade-out');
            titleImg.classList.add('fade-out');

            setTimeout(function () {
                var desc = part.getAttribute("data-desc");
                titleDesc.textContent = desc;
                var bgImg = part.getAttribute("data-img");
                titleImg.style.backgroundImage = `url('${bgImg}')`;

                titleDesc.classList.remove('fade-out');
                titleDesc.classList.add('fade-in');
                titleImg.classList.remove('fade-out');
                titleImg.classList.add('fade-in');
            }, 350);
        });
    });
    const sc = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            console.log(item);
            if (item.isIntersecting) {
                item.target.classList.add('visible');
                observer.unobserve(item.target);
            }
            else {
                item.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0
    });

    sc.forEach(el => {
        observer.observe(el);
    });

    const sc2 = document.querySelector("#part1"); // Correctly select the element by ID

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => { // Iterate over entries array
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer2.unobserve(entry.target); // Uncomment if you want to stop observing after intersection
            }
        });
    }, {
        threshold: 0
    });

    observer2.observe(sc2);

    const sc3 = document.querySelectorAll(".border");

    const observer3 = new IntersectionObserver((entries, observer3) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer3.unobserve(entry.target);
            }
        });
    });
    sc3.forEach(ele => {
        observer3.observe(ele);
    });

    const sc4 = document.querySelector("#testimonial-header"); // Correctly select the element by ID

    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach(entry => { // Iterate over entries array
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer2.unobserve(entry.target); // Uncomment if you want to stop observing after intersection
            }
        });
    }, {
        threshold: 0
    });

    observer4.observe(sc4);

    // var swipe = document.querySelector(".swiper");
    // var mouse = document.querySelector("#cursor");

    // swipe.addEventListener("mouseenter", function () {
    //     mouse.style.display = "flex";
    // });

    // // Hide cursor when leaving the Swiper container
    // swipe.addEventListener("mouseleave", function () {
    //     mouse.style.display = "none";
    // });

    // swipe.addEventListener("mousemove", function (event) {
    //     mouse.style.left = event.clientX + "px"
    //     mouse.style.top = event.clientY + "px"
    // });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        grabCursor: true,
    });



    const sc5 = document.querySelector(".swiper"); // Correctly select the element by ID

    const observer5 = new IntersectionObserver((entries) => {
        entries.forEach(entry => { // Iterate over entries array
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer2.unobserve(entry.target); // Uncomment if you want to stop observing after intersection
            }
        });
    }, {
        threshold: 0
    });

    observer5.observe(sc5);


    var menu = document.querySelector("#drop-down");
    var full = document.querySelector("#full-scr");
    var logo = document.querySelector("#logo");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = "0";
            logo.style.opacity = "0";
            flag = 1;
        }
        else {
            full.style.top = "";
            logo.style.opacity = "";
            flag = 0;
        }

    });

    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)

});






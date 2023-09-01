import DOM from "../dom-init";

DOM.Methods.sliderNews = function ($this) {

    // targetiranje
    const el = $this[0];
    const splideEl = el.querySelector(".splide");

    const prevBtn = el.querySelector(".prevBtn");
    const nextBtn = el.querySelector(".nextBtn");
    // targetiranje


    // init plugina na targetiran element s nekim opcijama
    var splideSlider = new Splide(splideEl, {
        speed: 800,
        arrows: false,
        pagination: false,
        updateOnMove: true,
        perPage: 2,
        perMove: 1,
        rewind: false,
        breakpoints: {
            768: {
                perPage: 1,
            }
        }
    });

    // navigation functions
    function goNext () {
        splideSlider.go(">");
    }

    function goPrev () {
        splideSlider.go("<");
    }

    function addSliderEvents () {
        // desktop
        if (window.innerWidth >= 768) {
            splideSlider.on("mounted", function () {
                document.getElementById("current-slide").textContent = splideSlider.index + 1;
                document.getElementById("total-slides").textContent = splideSlider.length - 1;
            });
            splideSlider.on("move", function () {
                document.getElementById("current-slide").textContent = splideSlider.index + 1;
                document.getElementById("total-slides").textContent = splideSlider.length - 1;
            });
        }
        else {
            // mobile
            splideSlider.on("mounted", function () {
                document.getElementById("current-slide").textContent = splideSlider.index + 1;
                document.getElementById("total-slides").textContent = splideSlider.length;
            });
            splideSlider.on("move", function () {
                document.getElementById("current-slide").textContent = splideSlider.index + 1;
                document.getElementById("total-slides").textContent = splideSlider.length;
            });
        }
    }


    function init () {
        addSliderEvents();

        splideSlider.mount();

        prevBtn.addEventListener("click", goPrev);
        nextBtn.addEventListener("click", goNext);
    }

    function destroy () {
        splideSlider.destroy();

        prevBtn.removeEventListener("click", goPrev);
        nextBtn.removeEventListener("click", goNext);
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleViewportChange (mediaQuery) {
        destroy();
        init();
    }

    mediaQuery.addEventListener("change", handleViewportChange);

    init();
    handleViewportChange(mediaQuery);
};
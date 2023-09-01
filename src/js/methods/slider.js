import DOM from "../dom-init";

DOM.Methods.slider = function ($this) {

    // targetiranje
    const el = $this[0];
    const splideEl = el.querySelector(".splide");

    const prevBtn = el.querySelector(".prevBtn");
    const nextBtn = el.querySelector(".nextBtn");
    // targetiranje


    // init plugina na targetiran element s nekim opcijama
    var splideSlider = new Splide(splideEl, {
        type: 'loop',
        speed: 800,
        arrows: false,
        pagination: false,
        updateOnMove: true,
        perPage: 1,
        focus: "center",
    });

    splideSlider.mount();
    // init plugina na targetiran element s nekim opcijama

    
    // dodavanje user kontrole (klik miša u ovom slučaju)
    // add event listeners
    prevBtn.addEventListener("click", function () {
        splideSlider.go("<");
    });

    nextBtn.addEventListener("click", function () {
        splideSlider.go(">");
    });
    // dodavanje user kontrole (klik miša u ovom slučaju)
};
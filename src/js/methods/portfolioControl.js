import DOM from "../dom-init";

DOM.Methods.portfolioControl = function ($this) {
    const el = $this[0];
    const tabWrap = el.querySelector(".tabs");
    const pickers = el.querySelectorAll(".tab-item");
    const tabs = el.querySelectorAll(".tab");
    

    function select (i) {
        // hide all
        tabs.forEach(function (tab) {
            gsap.to(tab, {
                opacity: 0,
                display: "none",
                duration: 0.5
            });
        });

        // remove all actives
        pickers.forEach(function (picker) {
            picker.classList.remove("active");
        });


        let innerAnim = null;
        gsap.to(tabs[i], {
            opacity: 1,
            display: "block",
            delay: 0.5,
            onStart: function () {
                innerAnim = gsap.from(tabs[i].querySelectorAll(".portfolio-card"), {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.5,
                    stagger: 0.1,
                    paused: true
                });
            },
            onComplete: function () {
                gsap.to(tabWrap, {
                    height: tabs[i].clientHeight
                });
                
                innerAnim.play();
            }
        });
        pickers[i].classList.add("active");
    }

    pickers.forEach(function (picker, index) {
        picker.addEventListener("click", function (evt) {
            evt.preventDefault();

            select(index);
        });
    });

    // init
    select(0);
};

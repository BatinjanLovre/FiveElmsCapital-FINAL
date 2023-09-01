export default function Animations () {
    // animation types
    function fadeTranslateX () {
        const elements = document.querySelectorAll(".fade-translate-x");

        elements.forEach(function (element) {
            gsap.fromTo(element, {
                x: "100%",
                opacity: 0
            }, {
                x: "0%",
                opacity: 1,
                duration: 2,
                ease: "expo",
                paused: true,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    // markers: true,
                    toggleActions: "play none none none"
                }
            });
        });
    }

    function fadeTranslateY () {
        const elements = document.querySelectorAll(".fade-translate-y");

        elements.forEach(function (element) {
            gsap.fromTo(element, {
                y: "100%",
                opacity: 0
            }, {
                y: "0%",
                opacity: 1,
                duration: 2,
                ease: "expo",
                paused: true,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    // markers: true,
                    toggleActions: "play none none none"
                }
            });
        })
    }

    function staggerElementsY () {
        const wraps = document.querySelectorAll(".stagger-elements-y");

        wraps.forEach(function (wrap) {
            const staggers = wrap.querySelectorAll(".stagger-elem");

            gsap.from(staggers, {
                y: "100%",
                opacity: 0,
                stagger: 0.2,
                duration: 2,
                ease: "expo",
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 45%",
                    // markers: true,
                    toggleActions: "play none none none"
                }
            });
        });
    }

    function staggerElementsX () {
        const wraps = document.querySelectorAll(".stagger-elements-x");

        wraps.forEach(function (wrap) {
            const staggers = wrap.querySelectorAll(".stagger-elem");

            gsap.from(staggers, {
                x: "100%",
                opacity: 0,
                stagger: 0.2,
                duration: 2,
                ease: "expo",
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 70%",
                    // markers: true,
                    toggleActions: "play none none none"
                }
            });
        });
    }

    function staggerElementsXnegative () {
        const wraps = document.querySelectorAll(".stagger-elements-x-negative");

        wraps.forEach(function (wrap) {
            const staggers = wrap.querySelectorAll(".stagger-elem");

            gsap.from(staggers, {
                x: "-100%",
                opacity: 0,
                stagger: -0.2,
                duration: 2,
                ease: "expo",
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 70%",
                    // markers: true,
                    toggleActions: "play none none none"
                }
            });
        })
    }

    function appear () {
        const elements = document.querySelectorAll(".appear");
        
        elements.forEach(function (element) {
            gsap.from(element, {
                opacity: 0,
                duration: 2,
                ease: "power2",
                scrollTrigger: {
                    trigger: element,
                    start: "top 25%",
                    markers: true,
                    toggleActions: "play none none none"
                }
            });
        })
    }

    function appearStagger () {
        const wraps = document.querySelectorAll(".appear-stagger");

        wraps.forEach(function (wrap) {
            const staggers = wrap.querySelectorAll(".stagger-elem");

            gsap.from(staggers, {
                opacity: 0,
                stagger: 0.2,
                duration: 2,
                ease: "expo",
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 55%",
                    markers: true,
                    toggleActions: "play none none none"
                }
            })
        })
    }
    // call all functions
    fadeTranslateX();
    fadeTranslateY();
    staggerElementsY();
    staggerElementsX();
    staggerElementsXnegative();
    appear();
    appearStagger();
}
gsap.to('.box', {
    scrollTrigger: {
        trigger:'.box',
       // markers: true,
        start: '20% 20%',
        end:'bottem 20%',
        scrub:5,
    },
    x: 500,
    duration: 5,
})

$("button").click (function(){
    $("ul").slideToggle();
});


// oul carousel

$('.delhi').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// secend oul carousel

$('.old-delhi').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        463:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
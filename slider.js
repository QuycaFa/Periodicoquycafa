window.addEventListener('load', function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: ".dots",
    draggable: null,
    arrows: {
      prev: '.antes',
      next: '.despues'
    },
    responsive: [{
      breakpoint: 150,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      breakpoint: 775,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.25
      }
    }]
  });
});
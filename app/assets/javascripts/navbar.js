$(window).on('scroll', function(e){
  if ($(this).scrollTop() > 100) {
    $('.mynavbar').addClass("is-scrolling")
    $('.navbar-link').removeClass("unscrolled")
    $('.navbar-button').removeClass("unscrolled")
    $('.navicon').removeClass("unscrolled")
    $('.navicon-small').removeClass("unscrolled")
  } else {
    $('.mynavbar').removeClass("is-scrolling")
    $('.navbar-link').addClass("unscrolled")
    $('.navbar-button').addClass("unscrolled")
    $('.navicon').addClass("unscrolled")
    $('.navicon-small').addClass("unscrolled")
  }
})

$('.burger-menu').on('click', () => {
  console.log('hey');
  $('.nav-links').toggleClass('open');
  $('.nav-links li').toggleClass('fade');

});
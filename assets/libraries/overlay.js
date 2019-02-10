function openPage(pageName,element,color) {
  var i, tabcontent, tablinks;
  tabcontent = $('.tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    $(tabcontent[i]).css('display', 'none');
  }

  tablinks = $('.tablink');

  for (i = 0; i < tablinks.length; i++) {
    $(tablinks[i]).css('color', 'rgb(0, 162, 239)');
  }

  $(`#${pageName}`).css('display', 'flex');
  $(element).css('color', color);
  $('#overlay').css('display', 'flex');
  $('#login-form .error').text('');
  $('#register-form .error').text('');
  $('#login-form')[0].reset();
  $('#register-form')[0].reset();
}
$('#mobile_menu').click(function(){
  $('body').toggleClass('mainMenuOpen')
  $('body').removeClass('display-dropdownlist-movile')
  $('body').removeClass('display-userdata-movile')
})
$('.document__mobil-icon, .user__mobil-icon').click(function(){
  $('body').removeClass('mainMenuOpen')
})
$('.document__mobil-icon').click(function(){
  $('body').toggleClass('display-dropdownlist-movile')
  $('body').removeClass('display-userdata-movile')
})
$('.user__mobil-icon').click(function(){
  $('body').toggleClass('display-userdata-movile')
  $('body').removeClass('display-dropdownlist-movile')
})

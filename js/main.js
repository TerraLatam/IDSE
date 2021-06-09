//OPEN MOBILE MENU
$('#mobile_menu').click(function(){
  $('body').toggleClass('mainMenuOpen')
  $('body').removeClass('display-dropdownlist-movile')
  $('body').removeClass('display-userdata-movile')
})
//CLOSE MOBILE MENU ON CLICK HEADER BUTTOONS
$('.document__mobil-icon, .user__mobil-icon').click(function(){
  $('body').removeClass('mainMenuOpen')
})
//ON DESKTOP OPEN DROPDOWN MENU
$('.header__top--dropdown-content').click(function(){
  $('body').toggleClass('display-dropdownlist-desktop')
})
//ON DESKTOP OPEN USER INFO MENU
$('.header__top--user-name-content').click(function(){
  $('body').toggleClass('display-userdata-desktop')
})
//ON MOBILE DISPLAY DROPDOWN MENU
$('.document__mobil-icon').click(function(){
  $('body').toggleClass('display-dropdownlist-movile')
  $('body').removeClass('display-userdata-movile')
})
//ON MOBILE DISPLAY USER OPTIONS MENU
$('.user__mobil-icon').click(function(){
  $('body').toggleClass('display-userdata-movile')
  $('body').removeClass('display-dropdownlist-movile')
})
//CLOSE ALL MODALS ON CLICK ESCAPE KEY
$(document).on('keydown', function(event) {
   if (event.key == "Escape") {
     $('body').removeClass('display-dropdownlist-movile')
     $('body').removeClass('display-userdata-movile')
     $('body').removeClass('display-dropdownlist-desktop')
     $('body').removeClass('display-userdata-desktop')
   }
});
//CLOSE USER INFO MENU IF CLICK OUTSIDE MENU
$(document).mouseup(function(e){
    var container = $('.header__top--user-name-content');
    if (!container.is(e.target) && container.has(e.target).length === 0){
        $('body').removeClass('display-userdata-desktop')
    }
});
//CLOSE DROPDOWN MENU IF CLICK OUTSIDE MENU
$(document).mouseup(function(e){
    var container = $('.header__top--dropdown-content');
    if (!container.is(e.target) && container.has(e.target).length === 0){
        $('body').removeClass('display-dropdownlist-desktop')
    }
});
//MAIN MENU: HOVER ON DESKTOP / CLICK ON MOBILE
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isWindows = /windows phone/i.test(navigator.userAgent.toLowerCase());
var isBlackberry = /blackberry/i.test(navigator.userAgent.toLowerCase());
var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());

if(isAndroid || isWindows || isBlackberry || isiDevice){
    $('.has-submenu').on('click',function(event){
        event.preventDefault();
    });
}else{
    $('.has-submenu').on('hover',function(event){
    });
}

if ($(window).width() < 992) {
  $('.has-submenu').on('click',function(event){
      event.preventDefault();
  });
}
//MOBILE SHOW SUBMENU
$('.has-submenu').click(function(){
//  if($('.header__bottom--mainnavigation ul li').hasClass('show-mobile-menu')){
//   $('.header__bottom--mainnavigation ul li').removeClass('show-mobile-menu')
 //}
 $(this).closest('li').toggleClass('show-mobile-menu');
 $(this).closest('li').siblings().removeClass('show-mobile-menu');
})




//EXPORTACION SUA
//Show and hide options -- Expoortacion SUA
$(".ausentismo-incapacidades").change(function() {
    if(this.checked) {
        $('.sua__ausentismoo-options').show();
    }else {
      $('.sua__ausentismoo-options').hide();
    }
});
$(".movimientos-afilatorios").change(function() {
    if(this.checked) {
        $('.sua__movimientos-options').show();
    }else {
      $('.sua__movimientos-options').hide();
    }
});
//Show and hide options -- Ausentismo e incapacidades
$("input[name='radio-sua']").click(function() {
   if($('.radio__incidentes').is(':checked')) {
     $('.sua__incidentes-options').show();
     $('.sua__archivos-options').hide();
     $('.sua__busqueda-options').hide();
   } else if($('.radio__importar').is(':checked')) {
     $('.sua__archivos-options').show();
     $('.sua__busqueda-options').hide();
     $('.sua__incidentes-options').hide();
   } else if($('.radio__busqueda').is(':checked')) {
     $('.sua__busqueda-options').show();
     $('.sua__archivos-options').hide();
     $('.sua__incidentes-options').hide();
   }
});
//UPLOAD FILE CLEAR BUTTON
var control = $(".file_type"),
    clearBn = $("#clear");

clearBn.on("click", function(){
    control.replaceWith( control.val('').clone( true ) );
});
//SUA DATAPICKERS
//Datepicker simple
$( function() {
    $( ".dp__input--simple" ).datepicker();
});
//Datapicker Ausentismo e Incapacidades
$(function () {
    $(".sua__auycs--dpinicio").datepicker({
        numberOfMonths: 1,
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() + 1);
            $(".sua__auycs--dpfin").datepicker("option", "minDate", dt);
        }
    });
    $(".sua__auycs--dpfin").datepicker({
        numberOfMonths: 1,
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() - 1);
            $(".sua__auycs--dpinicio").datepicker("option", "maxDate", dt);
        }
    });
});
//Datepicker Movimientos Afiliatorios
$(function () {
    $(".sua__moaf--dpinicio").datepicker({
        numberOfMonths: 1,
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() + 1);
            $(".sua__moaf--dpfin").datepicker("option", "minDate", dt);
        }
    });
    $(".sua__moaf--dpfin").datepicker({
        numberOfMonths: 1,
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() - 1);
            $(".sua__moaf--dpinicio").datepicker("option", "maxDate", dt);
        }
    });
});
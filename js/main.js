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


//LISTADO DE EMISIONES - Cerrar Aviso "Descarga en proceso" Modal
$('.close_aviso').click(function(){
  $(this).parent('.aviso_modal').fadeOut();
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

/////// MODALES //////
//MODAL Monitoreo de archivos enviados por FTP
$('.show-modal').click(function(event){
  event.preventDefault();
  $('body').addClass('modal-open');
  $('.modal').addClass('show');
})

$('.close_modal').click(function(event){
  event.preventDefault();
  $('body').removeClass('modal-open');
  $('.modal').removeClass('show');
})
//MODAL Captura - Lotes enviados
$('.show-modal-lote').click(function(event){
  event.preventDefault();
  $('body').addClass('modal-lotes-open');
  $('.modal_lotes-enviados').addClass('show');
})

$('.close_modal').click(function(event){
  event.preventDefault();
  $('body').removeClass('modal-lotes-open');
  $('.modal_lotes-enviados').removeClass('show');
})
//MODAL Captura - Consultar Acuse
$('.show-modal-acuse').click(function(event){
  event.preventDefault();
  $('body').addClass('modal-acuse-open');
  $('.modal_consultar-acuse').addClass('show');
})

$('.close_modal').click(function(event){
  event.preventDefault();
  $('body').removeClass('modal-acuse-open');
  $('.modal_consultar-acuse').removeClass('show');
})
//MODAL Captura - Consultar Respuesta
$('.show-modal-respuesta').click(function(event){
  event.preventDefault();
  $('body').addClass('modal-respuesta-open');
  $('.modal_respuesta').addClass('show');
})

$('.close_modal').click(function(event){
  event.preventDefault();
  $('body').removeClass('modal-respuesta-open');
  $('.modal_respuesta').removeClass('show');
})

//MODAL Emision - descargar status
$('.show-modal-emision-ver-status').click(function(event){
  event.preventDefault();
  $('body').addClass('.modal-ver-status-open');
  $('.modal_detalle_status').addClass('show');
  $('body').removeClass('modal-respuesta-open');
  $('.modal_respuesta').removeClass('show');
})
$('.close_modal, .consulta_asegurados_btn').click(function(event){
  event.preventDefault();
  $('body').removeClass('.modal-ver-status-open');
  $('.modal_detalle_status').removeClass('show');
})
$('.back_modal, .consulta_asegurados_btn').click(function(event){
  event.preventDefault();
  $('body').removeClass('.modal-ver-status-open');
  $('.modal_detalle_status').removeClass('show');
})

//MODAL Emision - Detalle de Archivos
$('.show-modal-emision-ver-detalle').click(function(event){
  event.preventDefault();
  $('body').addClass('modal-ver-detalle-open');
  $('.modal_detalle_descarga').addClass('show');
})

$('.close_modal, .consulta_asegurados_btn').click(function(event){
  event.preventDefault();
  $('body').removeClass('modal-ver-detalle-open');
  $('.modal_detalle_descarga').removeClass('show');
})
//MODAL Emision - Lista de asegurados
$('.consulta_asegurados_btn').click(function(event){
  event.preventDefault();
  $('body').addClass('modal-ver-lista-open');
  $('.modal_emision_lista_asegurados').addClass('show');
})
$('.close_modal, .open_nss_number').click(function(event){
  event.preventDefault();
  $('body').removeClass('modal-ver-lista-open');
  $('.modal_emision_lista_asegurados').removeClass('show');
})
//MODAL Emision – Pop NSS
$('.open_nss_number').click(function(event){
  event.preventDefault();
  $('body').addClass('modal-ver-pop-nss-open');
  $('.modal_emision_pop_nss').addClass('show');
})
$('.close_modal').click(function(event){
  event.preventDefault();
  $('body').removeClass('modal-ver-pop-nss-open');
  $('.modal_emision_pop_nss').removeClass('show');
})

//INPUTS idse-consultas.html
$(".registro_patronal_checkbox").change(function() {
    if(this.checked) {
      $('.content_nss').hide();
      $('.content_registro_patronal').show();
      $('.content_movimientos-rechazados').hide();
      $('.content_expiracion-certificados').hide();
      $('.consulta_enabled1').removeClass('disable_input');
      $('.consulta_enabled2').addClass('disable_input');
      $('.consulta_enabled3').addClass('disable_input');
      $('.consulta_enabled4').addClass('disable_input');
      $('.nss_checkbox').prop( "checked", false );
      $('.numero_de_lote_checkbox').prop( "checked", false );
      $('.reporte_general_checkbox').prop( "checked", false );
      $('.mov_rechazados_checkbox').prop( "checked", false );
      $('.exp_certificados_checkbox').prop( "checked", false );
    }else {
      $('.consulta_enabled1').addClass('disable_input');
    }
});

$(".nss_checkbox").change(function() {
    if(this.checked) {
      $('.content_nss').show();
      $('.content_registro_patronal').hide();
      $('.content_movimientos-rechazados').hide();
      $('.content_expiracion-certificados').hide();
      $('.consulta_enabled2').removeClass('disable_input');
      $('.consulta_enabled1').addClass('disable_input');
      $('.consulta_enabled3').addClass('disable_input');
      $('.consulta_enabled4').addClass('disable_input');
      $('.registro_patronal_checkbox').prop( "checked", false );
      $('.numero_de_lote_checkbox').prop( "checked", false );
      $('.reporte_general_checkbox').prop( "checked", false );
      $('.mov_rechazados_checkbox').prop( "checked", false );
      $('.exp_certificados_checkbox').prop( "checked", false );
    }else {
      $('.consulta_enabled2').addClass('disable_input');
    }
});

$(".numero_de_lote_checkbox").change(function() {
    if(this.checked) {
      $('.content_nss').hide();
      $('.content_registro_patronal').show();
      $('.content_movimientos-rechazados').hide();
      $('.content_expiracion-certificados').hide();
      $('.consulta_enabled1').addClass('disable_input');
      $('.consulta_enabled2').addClass('disable_input');
      $('.consulta_enabled3').removeClass('disable_input');
      $('.consulta_enabled4').addClass('disable_input');
      $('.nss_checkbox').prop( "checked", false );
      $('.registro_patronal_checkbox').prop( "checked", false );
      $('.reporte_general_checkbox').prop( "checked", false );
      $('.mov_rechazados_checkbox').prop( "checked", false );
      $('.exp_certificados_checkbox').prop( "checked", false );
    }else {
      $('.consulta_enabled3').addClass('disable_input');
    }
});

$(".reporte_general_checkbox").change(function() {
    if(this.checked) {
      $('.content_nss').hide();
      $('.content_registro_patronal').show();
      $('.content_movimientos-rechazados').hide();
      $('.content_expiracion-certificados').hide();
      $('.consulta_enabled1').addClass('disable_input');
      $('.consulta_enabled2').addClass('disable_input');
      $('.consulta_enabled3').addClass('disable_input');
      $('.consulta_enabled4').removeClass('disable_input');
      $('.nss_checkbox').prop( "checked", false );
      $('.registro_patronal_checkbox').prop( "checked", false );
      $('.numero_de_lote_checkbox').prop( "checked", false );
      $('.mov_rechazados_checkbox').prop( "checked", false );
      $('.exp_certificados_checkbox').prop( "checked", false );
    }else {
      $('.consulta_enabled4').addClass('disable_input');
    }
});

$(".mov_rechazados_checkbox").change(function() {
    if(this.checked) {
      $('.content_nss').hide();
      $('.content_registro_patronal').hide();
      $('.content_movimientos-rechazados').show();
      $('.content_expiracion-certificados').hide();
      $('.consulta_enabled1').addClass('disable_input');
      $('.consulta_enabled2').addClass('disable_input');
      $('.consulta_enabled3').addClass('disable_input');
      $('.consulta_enabled4').addClass('disable_input');
      $('.nss_checkbox').prop( "checked", false );
      $('.registro_patronal_checkbox').prop( "checked", false );
      $('.numero_de_lote_checkbox').prop( "checked", false );
      $('.reporte_general_checkbox').prop( "checked", false );
      $('.exp_certificados_checkbox').prop( "checked", false );
    }
});

$(".exp_certificados_checkbox").change(function() {
    if(this.checked) {
      $('.content_nss').hide();
      $('.content_registro_patronal').hide();
      $('.content_movimientos-rechazados').hide();
      $('.content_expiracion-certificados').show();
      $('.consulta_enabled1').addClass('disable_input');
      $('.consulta_enabled2').addClass('disable_input');
      $('.consulta_enabled3').addClass('disable_input');
      $('.consulta_enabled4').addClass('disable_input');
      $('.nss_checkbox').prop( "checked", false );
      $('.registro_patronal_checkbox').prop( "checked", false );
      $('.numero_de_lote_checkbox').prop( "checked", false );
      $('.reporte_general_checkbox').prop( "checked", false );
      $('.mov_rechazados_checkbox').prop( "checked", false );
    }
});


//CAPTURA LOTES ENVIADOS  idse-lotes-enviados.html
//DATEPICKER
function myDatePicker(){
  $('#dataPickerMonthly').MonthPicker({
    Button: false ,
    MonthFormat: 'M, yy', // Short month name, Full year.
    AltFormat: 'yy-dd-mm', // ODBC time stamp.
    IsRTL: true,
    i18n: {
      months: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"],
      backTo: "Regresar al",
      year: "Año",
    }
  });
}
$('.dataPickerMonthly').focus(function(){
  myDatePicker();
})

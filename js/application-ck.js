// Some general UI pack related JS
//Loading Personal Information
function getPersonalInfo(){$.trim($("#inputRG").val())!==""&&$("p.loading.rg").fadeIn(250)}function getAddress(){if($.trim($("#inputCEP").val())!==""){$("p.loading.cep").fadeIn(250);$("p.info.cep").fadeOut(250);$("p.text-error.cep").fadeOut(0);$.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#inputCEP").val(),function(){if(resultadoCEP.tipo_logradouro!==""){$("p.loading.cep").fadeOut(0);$("p.info.cep").fadeOut(0);if(resultadoCEP.resultado){$("#inputAddress").val(unescape(resultadoCEP.tipo_logradouro)+" "+unescape(resultadoCEP.logradouro));$("#inputNeighbor").val(unescape(resultadoCEP.bairro));$("#inputCity").val(unescape(resultadoCEP.cidade));$("#selectState").val(unescape(resultadoCEP.uf));$("#inputAddressNumber").focus()}}else{$("#inputCEP").focus();$("p.loading.cep").fadeOut(0);$("p.text-error.cep").fadeIn(250);$("p.info.cep").fadeIn(240)}})}}$(function(){$("select").dropkick();$("#inputBday").mask("99/99/9999");$("#inputPhoneHome").mask("(99) 9999-9999");$("#inputMobile").mask("(99) 9?9999-9999");$("#inputCEP").mask("99999-999")});$(document).ready(function(){$(".todo li").click(function(){$(this).toggleClass("todo-done")});$("[data-toggle=tooltip]").tooltip("show");$("#slider").slider({min:1,max:5,value:2,orientation:"horizontal",range:"min"});$("input, textarea").placeholder();$(".pagination a").click(function(){if(!$(this).parent().hasClass("previous")&&!$(this).parent().hasClass("next")){$(this).parent().siblings("li").removeClass("active");$(this).parent().addClass("active")}});$(".btn-group a").click(function(){$(this).siblings().removeClass("active");$(this).addClass("active")});$("a[href='#']").click(function(){return!1});jQuery.validator.setDefaults({errorClass:"text-error error",validClass:"valid",errorElement:"label"});$("#formBooking").validate({rules:{inputRG:{required:!0},inputName:{required:!0,minlength:2},inputEMail:{email:!0}},messages:{inputRG:{required:"Digite o seu RG"},inputName:{required:"Digite o seu nome",minLength:"O seu nome deve conter, no mínimo, 2 caracteres"},inputEMail:{required:"Digite o seu e-mail para contato",email:"Digite um e-mail válido"}}})});
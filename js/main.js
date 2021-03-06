Globalize.culture( "pt-BR" );
//Loading Personal Information
function getPersonalInfo() {
	if($.trim($("#inputRG").val()) !== ""){
		$("p.loading.rg").fadeIn(250);
	}
}

//Loading Address from Correios
function getAddress() {
	if($.trim($("#inputCEP").val()) !== ""){
		$("p.loading.cep").fadeIn(250);
		$("p.info.cep").fadeOut(250);
		$("p.text-error.cep").fadeOut(0);
		$.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#inputCEP").val(), function(){
			if(resultadoCEP["tipo_logradouro"] !== ""){
				$("p.loading.cep").fadeOut(0);
				$("p.info.cep").fadeOut(0);
				if (resultadoCEP["resultado"]) {
					$("#inputAddress").val(unescape(resultadoCEP["tipo_logradouro"]) + " " + unescape(resultadoCEP["logradouro"]));
					$("#inputNeighbor").val(unescape(resultadoCEP["bairro"]));
					$("#inputCity").val(unescape(resultadoCEP["cidade"]));
					$("#selectState").val(unescape(resultadoCEP["uf"]));
					$("#inputAddressNumber").focus();
				}
			} else {
				$("#inputCEP").focus();
				$("p.loading.cep").fadeOut(0);
				$("p.text-error.cep").fadeIn(250);
				$("p.info.cep").fadeIn(240);
			}
		});
	}
}
$(function () {
    //add mask in inputs
    //$("#inputBday").mask("99/99/9999");
    $("#inputPhoneHome").mask("(99) 9999-9999");
    $("#inputMobile").mask("(99) 9?9999-9999");
    $("#inputCEP").mask("99999-999");

});

jQuery.validator.setDefaults({
    errorClass: "text-error error",
	validClass: "valid",
	errorElement: "label"
});
$( document ).ready(function() {
//Validation Form Booking
    $("#formBooking").validate({
		// Define as regras
		rules:{
				inputRG:{
					// campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
					required: true
				},
				inputName:{
					// campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
					required: true, minlength: 2
				},
				inputEMail:{
					// campoEmail será obrigatório (required) e precisará ser um e-mail válido (email)
					email: true
				}
		},
		// Define as mensagens de erro para cada regra
		messages:{
			inputRG:{
				required: "Digite o seu RG"
			},
			inputName:{
				required: "Digite o seu nome",
				minLength: "O seu nome deve conter, no mínimo, 2 caracteres"
			},
			inputEMail:{
				required: "Digite o seu e-mail para contato",
				email: "Digite um e-mail válido"
			}
		}
	});
});

//CUANDO CAMBIA EL CAMPO DEL CODIGO DE SEGURIDAD
var arrPattern = [
	{pattern:/^((34)|(37))/, id:"amex"},
	{pattern:/^(400276|400448|400615|400930|402789|402914|404022|404625|405069|405511|405515|405516|405517|405755|405896|405897|406165|406190|406191|406192|406193|406194|406195|406196|406290|406291|406375|406652|406998|406999|408134|408515|410082|410083|410121|410122|410123|410853|411197|411199|411849|412944|413180|416679|416861|417309|417856|417857|421518|421528|421541|421738|423001|423018|423077|423090|423465|423613|423613|423623|424968|424969|426618|427156|427157|428062|428063|428064|429751|429752|431070|431071|434531|434532|434533|434534|434535|434536|434537|434538|434539|434540|434541|434542|434543|434549|434550|434586|434795|437996|437999|438050|438051|438844|439818|441046|442371|442548|443264|444047|444060|444267|444268|444493|446343|446344|446345|446346|446347|448712|450412|450799|450811|451377|451701|451751|451756|451757|451758|451761|451763|451764|451765|451766|451767|451768|451769|451770|451772|451773|452132|452133|453770|455890|457308|457596|457664|457665|459300|462815|463465|464855|468508|469283|469874|472041|472042|473227|473365|473710|473711|473712|473713|473714|473715|473716|473717|473718|473719|473720|473721|473722|473725|474531|476520|477051|477053|477169|478017|478527|478601|480459|480460|480724|480860|481397|481501|481502|481550|483002|483020|483188|485089|485947|486547|486587|486621|486665|487221|488241|489412|489634|492499|492528|492596|492597|492598|499859)/, id:"debito"},
	{pattern:/^(526461|514365|514256|514586|525855|511309|514285|553839|553777|553771|551792|528733|549180|528745|517562|511849|557648|546367)/, id:"debito"},
	{pattern:/^(604201)/, id:"debito"},
	{pattern:/^(27995)/, id:"shopping"}
];
//alert(JSON.stringify(arrPattern,null,'			'));

//CUANDO CAMBIA EL CAMPO DEL CODIGO
$('input[name=cvc]').keyup(function() {

	var cvc = document.getElementById("security_code").value;
	var number = document.getElementById("card_number").value.replace(/\s/g, '');
	var classField = document.getElementsByClassName("jp-card-cvc");
	var selected = 0;

	var pattern = arrPattern[0]['pattern'];
	if(pattern.test(number)){
		selected = 1;
		if(cvc == ""){
        	$("#security_code").attr('maxlength','4');
        	for(var i = 0; i < classField.length; i++){
	        	classField[i].innerText="••••";
	        }
		}
	}

	if(selected == 0){
		if(cvc == ""){
			$("#security_code").attr('maxlength','3');
	    	for(var i = 0; i < classField.length; i++){
	        	classField[i].innerText="•••";
	        }
		}
	}
	
});

//CUANDO CAMBIA EL CAMPO DEL NÚMERO
$('input[name=number]').keyup(function() {
	var cvc = document.getElementById("security_code").value;
	if(cvc != ""){
		document.getElementById("security_code").value = "";
	}
	var number = document.getElementById("card_number").value.replace(/\s/g, '');
	var classField = document.getElementsByClassName("jp-card-cvc");
	var pattern = "";
	var selected = 0;

	for(var j = 0; j < arrPattern.length; j++){
		pattern = arrPattern[j]['pattern'];
		idPattern = arrPattern[j]['id'];

		if(pattern.test(number)){
			selected = 1;
			if(idPattern == "amex"){
				if(cvc == ""){
					for(var i = 0; i < classField.length; i++){
			        	classField[i].innerText="••••";
			        }
		        	$("#security_code").attr('maxlength','4');
				}
			} else if(idPattern == "debito"){
				document.getElementById("cuotas_div").style.display = "none";
			} else if(idPattern == "shopping"){
				document.getElementById("cvc_div").style.display = "none";
				document.getElementById("name_div").classList.remove("col-md-8");
				document.getElementById("name_div").classList.add("col-md-12");
			}
		}
	}

	if(selected == 0){
		document.getElementById("cvc_div").style.display = "block";
		document.getElementById("name_div").classList.remove("col-md-12");
		document.getElementById("name_div").classList.add("col-md-8");
		document.getElementById("cuotas_div").style.display = "block";
    	$("#security_code").attr('maxlength','3');
    	for(var i = 0; i < classField.length; i++){
        	classField[i].innerText="•••";
        }
	}
	
});
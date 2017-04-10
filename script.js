
var int = document.getElementsByClassName('engresso_inteiro')[0];
var mei = document.getElementsByClassName('meio_engresso')[0];
var table = document.querySelector("table");
var inp_entrada = document.getElementById('entrada');
var simbolo = "R$";
var div = document.getElementsByClassName('div')[0].textContent=simbolo;;
var div_on = document.getElementsByClassName('valor_calculado')[0];
var div_total_in = document.getElementsByClassName('total_in')[0];
var div_total_mei = document.getElementsByClassName('total_mei')[0];
var div_end =  document.getElementsByClassName('total_final')[0];

div_on.textContent=("R$0.00");
var ctd_in=0;
var ctd_mei=0;
var entre = inp_entrada.value;
div_total_mei.textContent = ("0 Meia - Entrada R$0.00");
div_total_in.textContent = ("0 Entradas Inteiras R$ 0.00");
div_end.textContent = ("TOTAL : R$ 00.00");

 function addlebotao(){
  entre = inp_entrada.value;
	table.addEventListener("click", function (evento) {
		 var nomeTag = evento.target.tagName;
		 var nomeClasse = evento.target.className;
		if(nomeTag == 'TD'){
      div_end.textContent = ("TOTAL : R$ " + total_final);
			var assento = evento.target;
			if(nomeClasse == 'inteira'){
			    assento.className = 'meia';
          ctd_mei++;
          var total_mei = ((entre/2)*ctd_mei);
          var total_in = entre * ctd_in;
          if(ctd_mei <= 1){
              ctd_in-=1;
              total_in-=entre;
              var total_final = total_in + total_mei;
              div_total_in.textContent = (ctd_in + " Entrada Inteira R$ " + total_in);
              div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
              div_end.textContent = ("TOTAL : R$ " + total_final);
        };
         if(ctd_mei > 1){
             ctd_in-=1;
             total_in-=entre;
             var total_final = total_in + total_mei;
             div_total_in.textContent = (ctd_in + " Entrada Inteira R$ " + total_in);
             div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
             div_end.textContent = ("TOTAL : R$ " + total_final);
			};
      }else {
        assento.className = 'inteira';
        ctd_in++;
        var total_mei = ((entre/2)*ctd_mei);
        var total_in = entre * ctd_in;
        if((ctd_in <= 1)&&(ctd_mei<1)){
            var total_final = total_in + total_mei;
            div_total_in.textContent = (ctd_in + " Entrada Inteira R$ " + total_in);
            div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
            div_end.textContent = ("TOTAL : R$ " + total_final);
      };
      if((ctd_in <= 1)&&(ctd_mei>=1)){
          ctd_mei--;
          total_mei -=(entre/2);
          var total_final = total_in + total_mei;
          div_total_in.textContent = (ctd_in + " Entrada Inteira R$ " + total_in);
          div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
          div_end.textContent = ("TOTAL : R$ " + total_final);
    };
       if((ctd_in > 1)&&(ctd_mei<1)){
           var total_final = total_in + total_mei;
           div_total_in.textContent = (ctd_in + " Entradas Inteiras R$ " + total_in);
           div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
           div_end.textContent = ("TOTAL : R$ " + total_final);
       };
       if((ctd_in > 1)&&(ctd_mei==1)){
           var total_final = total_in + total_mei;
           div_total_in.textContent = (ctd_in + " Entradas Inteiras R$ " + total_in);
           div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
           div_end.textContent = ("TOTAL : R$ " + total_final);
       };
       if((ctd_in > 1)&&(ctd_mei>1)){
           alert("no");
           ctd_mei--;
           total_mei -=(entre/2);
           var total_final = total_in + total_mei;
           div_total_in.textContent = (ctd_in + " Entradas Inteiras R$ " + total_in);
           div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
           div_end.textContent = ("TOTAL : R$ " + total_final);
       };
			};
    };
	});
  table.addEventListener("contextmenu", function (evento) {

      var nomeClasse = evento.target.className;
      if(nomeClasse=="inteira"){
      var assento = evento.target;
      assento.className = 'pol';
      var total_mei=(entre/2)*ctd_mei;
      var total_in=entre*ctd_in;
      total_in-=entre;
      ctd_in--;
      var total_final = total_in+total_mei;
      var assento = evento.target;
      assento.className = 'pol';
      div_total_in.textContent = (ctd_in + " Entradas Inteiras R$ " + total_in);
      div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
      div_end.textContent = ("TOTAL : R$ " + total_final);
    }
    if(nomeClasse=="meia"){
      var assento = evento.target;
      assento.className = 'pol';
      var total_in=entre*ctd_in;
      var total_mei=((entre/2)*ctd_mei);
      total_mei-=(entre/2);
      ctd_mei--;
      var total_final = total_in+total_mei;
      var assento = evento.target;
      assento.className = 'pol';
      div_total_in.textContent = (ctd_in + " Entradas Inteiras R$ " + total_in);
      div_total_mei.textContent = (ctd_mei + " Meia - Entrada R$" + total_mei);
      div_end.textContent = ("TOTAL : R$ " + total_final);
    }
   });
};
addlebotao();



inp_entrada.onkeyup = function () {
  entre = inp_entrada.value;
  var valor = parseFloat((entre/2)+0);
  var total_mei = ((entre/2)*ctd_mei);
  var total_in = entre * ctd_in;
  div_on.textContent=(("R$")+valor+".00");
};

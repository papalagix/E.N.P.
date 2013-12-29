$(document).ready(function(){
//Evidenzia connessioni Riina&Friends
	(function animazioni(){
		$('#riina, #cina, #lima, #mori, #dedonno, #ciancimino').hover(function(){
			$('#riina, #mancino, #cina, #lima, #mori, #dedonno, #ciancimino').addClass('riina');
		},function() {
			$('#riina, #mancino, #lima, #cina, #mori, #dedonno, #ciancimino').removeClass('riina');
			$('#con1 div').empty();
			$('#con1 button').detach();
		});
		
//Evidenzia connessioni Contrada&Friends
		$('#contrada, #borsellino, #narracci').hover(function(){
			$('#contrada, #borsellino, #narracci').addClass('riina');
		},function(){
			$('#contrada, #borsellino, #narracci').removeClass('riina');
			$('#con1 div').empty();
			$('#con1 button').detach();
		});
		
//Evidenzia connessioni N.Amato
		$('#amato, #mancino, #conso').hover(function(){
			$('#amato, #mancino, #conso').addClass('riina');
		},function(){
			$('#amato, #mancino, #conso').removeClass('riina');
			$('#con1 div').empty();
			$('#con1 button').detach();
			});
	})();
	
//Animazioni
    (function connessioni() {
        //Evidenzia Soggetto Singolo
        $('li').hover(function () {
            if ($('li').is('.riina')) {
                $(this).css("background-color", "gray");
                $('#con1').append(azz, italiano, leggiconn);
            } else {
                $(this).css("background-color", "gray");
                $('#con1').append(azz, italiano);
            }
        }, function () {
            $(this).css("background-color", "");
            $('#con1 div').empty();
            $('#con1 button').detach();
        });
	
//blocca scelta
		$(this).click(function(){
			$('li').off();
		});

//Bottoni
		var azz = $('<button id="azzz">Storia Sua</button>').click(function(){
			location.reload();
		});
		var italiano = $('<button id="italiano">Azzera Storia</button>').click(function(){
			location.reload();
		});
		var leggiconn = $('<button id="arancio">Storie Loro</button>').click(function() {
			location.reload();
		});
		
	})();
});

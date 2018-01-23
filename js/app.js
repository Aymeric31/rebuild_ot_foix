	jQuery(document).ready(function(){
		var mymap = L.map('mapid').setView([42.850, 1.65], 9);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1IjoiYXltZXJpYzMxIiwiYSI6ImNqM2E2dzl5cTAwMzgycW83ZWhvbHFhZGwifQ.zuFKT4e7IjgpwHoxF_Xfeg'
		}).addTo(mymap);

		afficheTarif();
		function afficheTarif() {
			$( "#actionTarif" ).click(function() {
				$(".tarifs").append("<table class='table table-bordered table-dark'><tr><td>Entrée adultes</td><td>5€</td></tr><tr><td>Entrée groupes</td><td>4€</td></tr></table>");
			});
		}
		afficheTarif2();
		function afficheTarif2() {
			$( "#actionTarif2" ).click(function() {
				$(".tarifs2").append("<table class='table table-bordered table-dark'><tr><td>Enfants et scolaires</td><td> de 1,00€ à 1,50€</td></tr><tr><td>Adultes</td><td> de 2,00€ à 3,00€</td></tr></table>");
			});
		}
		afficheTarif3();
		function afficheTarif3() {
			$( "#actionTarif3" ).click(function() {
				$(".tarifs3").append("<table class='table table-bordered table-dark'><tr><td>Entrée enfants (- de 12 ans)</td><td>8,80€</td></tr><tr><td>Entrée Adultes</td><td>10,80€</td></tr><tr><td>Entrée groupe enfants</td><td>7,50€</td></tr><tr><td>Entrée groupe adultes</td><td>8,80€</td></tr></table>");
			});
		}
		afficheTarif4();
		function afficheTarif4() {
			$( "#actionTarif4" ).click(function() {
				$(".tarifs4").append("<table class='table table-bordered table-dark'><tr><td>Entrée junior (à 5 à 18 ans)</td><td>6€</td></tr><tr><td>Entrée adulte</td><td>8,80€</td></tr><tr><td>Entrée étudiant</td><td>7,30€</td></tr><tr><td>Entrée groupe junior</td><td>4,50€</td></tr><tr><td>Entrée groupes étudiant</td><td>5,80€</td></tr><tr><td>Entrée groupe adulte</td><td>7€</td></tr><tr><td>Pass Famille (2A-2E)</td><td>26€€</td></tr><tr><td>Pass famille enfants supplémentaire</td><td>4€</td></tr></table>");
			});
		}
	});
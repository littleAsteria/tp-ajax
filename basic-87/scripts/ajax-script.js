$(function(){//accolade ouvrante function jquery
	alert('coucou');
	$("form").submit(function(e){//ouvrante event submit
		e.preventDefault();

		$.ajax({

			url:"http://localhost/tp-ajax/basic-87/tp_api.php",
			methode:"POST",
			data:$("form").serialize()

		})
		.done(function(data){

			$("#message_ajax").html("<div class='alert alert-success'><strong>Success!</strong>Use register</div>");
			console.log("yes");

		})
		.fail(function(jqXHR,textStatus){
			$("#message_ajax").html("<div class='alert alert-danger'><strong>Error!</strong>Use register</div>");
			console.log("no");
		});//fermante fail

	});//fermante event submit



	let request = $.ajax({ 

  				url:"http://localhost/tp-ajax/basic-87/tp_api.php",
  				method: "GET",
  				dataType: "json" 

		});

 	
		request.done(function(data) {
					
				let content="";

				data.forEach(function(element){

				content +='<li><a href="#">' + element.marque +' '+element.modele+'</a><li>';
						
				});//recupere en tableau les donnees de la requete ajax 
					
				$("#right_column ul").html(content);
		});
					

});//accolade fermante function jquery
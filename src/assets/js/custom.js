
		function JsLogin(){
			$("#myModal").modal();
		}
		function JsContrato(){			
			$("#ModalContrato").modal();
		}


		function JsRegister(){
			$.ajax({
				async:true,
				dataType: "json",
				type: "POST",
				url: "http://192.241.239.108:5050/api/register" ,
				data: $("#formdata_register").serialize(),
				success: function(data){
					if(data.status==false ){
						//$('#mensaje_rojo').html(data.msg).show();
						//$('#mensaje_verde').hide();
						 swal("Error !", data.msg, "error");
						return false ;	

					} 
					if(data.status==true){						
		                  
		                  swal({
							  title:data.msg,
							  text: "",
							  type: "success",
							  showCancelButton:false,
							  confirmButtonClass:"btn-primary",
							  confirmButtonText:"Ok",
							  closeOnConfirm: true
							},
							function(){
							  document.getElementById("formdata_register").reset();
							  $('#myModal').modal('hide');
							});
		                  
						 return false ;	
					} 
				}
			});



		}	



		function JsLoginForm(){
			var email=$("#email_login").val();
			var password=$("#password_login").val();
			var ip=$("#ip_login").val();
			var pais=$("#password_login").val();
			$.ajax({
				async:true,
				dataType: "json",
				type: "POST",
				url: "http://192.241.239.108:5050/api/login" ,
				data:"email="+email+"&password="+password+"&ip="+ip+"&pais="+pais,
				success: function(data){
					if(data.status==false ){						
						 swal("Error !", data.msg, "error");
						return false ;	
					} 
					if(data.status==true){	

						localStorage.setItem("token" , data.token);				
		                  
		                  swal({
							  title:data.msg,
							  text: "",
							  type: "success",
							  showCancelButton:false,
							  confirmButtonClass:"btn-primary",
							  confirmButtonText:"Ok",
							  closeOnConfirm: true
							},
							function(){
							  document.getElementById("form_login").reset();
							  $('#myModal').modal('hide');
							  window.location.href = "/sistema";
							});
		                  
						 return false ;	
					} 
				}
			});



		}	


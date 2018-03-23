
function matchpass(){  
	var firstpassword=document.f1.password.value;  
	var secondpassword=document.f1.password2.value;  
	var length;

	if((firstpassword==secondpassword) && (firstpassword.length>8)){  
		return true;  
	}  
	else{  
		alert("password must be same!");  
		return false;  
	}  
}  
function validateemail()  
{  
	var x=document.myform.email.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");  
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
		alert("Please enter a valid e-mail address")
		return false;  
	}  
}
$("#submit").click(function(){
	if($(".f").val() == '') 
	{
		$(".required").css('background-color' , '#FF0000');
	}
});  

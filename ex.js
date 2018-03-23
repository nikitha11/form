    $(document).ready(function(){
    	var total = 0;
    	$("#w").hide();
    	$("#s").click(function(){
    	$("#e").hide();
    	$("#w").show();  
    	$("#q").hide();
    	$("#s").hide();
});

    	// $("#sel").click(function () {
    		// $(".mychk").each(function(){
    			// debugger;
    			// this.checked = true;

    		// });
    	// });

    	// $("#unsel").click(function () {
    		// $(".mychk").each(function(){
    			// debugger;
    			// this.checked = false;
    		});
    	// });
    	$("#s").click(function () {
					$(":checkbox:checked.mychk").each(function(){
    			debugger;
					total+= parseInt(this.value);
    			});
    		document.getElementById('Totalcost').innerHTML = total + " /-";                    
    	});
    });

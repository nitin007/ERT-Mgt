$(function(){
	
	$('.emp').draggable({
		helper: 'clone',
		cursor: 'move'
	});
	
	$('.drop').droppable({
		 accept: '.emp',
		 addClasses: false,
		 hoverClass: 'activeState',
         drop: function(event,ui){	
		     if(!($(this).children('div').length))
		     {
		     		$(this).append($(ui.draggable).clone());
		    		$(this).find('div').prepend('<img src = images/remove.png class = remove />');
		    		$(this).find('img').hide();		     		
		     		
		     		
		     		var that = this;
		     		
		     		
		     		$('div.todos_head').children().each(function(){
		  		   	if($(that).attr('role')===$(this).attr('role'))
		  		   	{
		  		   		$(this).prepend('<img src = images/collapse.png class=collapse />');
		  		   		$(this).prepend('<img src = images/expand.gif class=expand />');
		  		   		$(this).append($(ui.draggable).clone());
		  		   		$(this).find('.ui-draggable').append('<div class=task></div>');
		  		   		$(this).children('img.expand').hide();
		  		   		$(this).children('.emp').removeClass('ui-draggable');
		  		   		return;
		  		   	}		
		     		});
		     }
         	
        	 else
     		 {
     	 		var that = this;
     			$(this).children('div').each(function(){
     				if(!($(this).attr('id')===$(ui.draggable).attr('id')))
     				{
     					if($(this).is(':last-child'))
     					{	
     						$(that).append($(ui.draggable).clone());
     						$(this).next().prepend('<img src = images/remove.png class = remove />');		
     						$(that).find('img').hide();
     						
     						
			    	 		$('div.todos_head').children().each(function(){
			  			   	if($(that).attr('role')===$(this).attr('role'))
			  			   	{
		  			   			$(this).append($(ui.draggable).clone());
		  			   			$(this).find('.ui-draggable').append('<div class=task></div>');
		 	 		   			$(this).children('.emp').removeClass('ui-draggable');
		  			   			return;
			  		   		}		
		 	    			});
     						
     					}
     				}
     				else
     				{
     					return false;
     				}
     			});
          }
           	 
           	  
			$(this).find('.emp').mouseenter(function(){
				$(this).children('img').show(300);
			});
       	
	  		$(this).find('.emp').mouseleave(function(){
				$(this).children('img').hide(300);
			});
			
			
			$(this).find('img.remove').click(function(){
				$(this).parent().remove();
				
				var idVar = $($(this).parent()).attr('id');
						   	
		   	$('.todos_head #'+idVar).remove();
		  		$('.todos_head').children().each(function(){
		  			if(!($(this).children('.emp').length))
		  			{
		  				$(this).children('img').hide();
		  			}
		  		});
       	});    	 
       
       		
       		$('img.expand').click(function(){
       			$(this).nextAll('div').show(200);
       			$(this).hide();
       			$(this).next('img').show();
       		});
       			
       			
       		$('img.collapse').click(function(){
       			$(this).nextAll('div').hide(200);
       			$(this).hide();
       			$(this).prev('img').show();
       		});
         },
	});
});

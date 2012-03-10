$(function(){
	
	$('.emp').draggable({
		helper: 'clone',
		cursor: 'move'
	});
	
	$('.rolesContainer .ror,.rolesContainer .android,.rolesContainer .ios,.rolesContainer .js').droppable({
		 accept: '.emp',
		 addClasses: false,
		 hoverClass: 'activeState',
         drop: function(event,ui){	
		     if(!$('.rolesContainer .'+$(this).attr('class')).children('div').length)
		     {
					$('.toDosContainer .'+$(this).attr('class')).prepend('<img src=/home/nitin-gupta/Desktop/ERT-Mgt/images/collapse.png class=collapse />');
					$('.toDosContainer .'+$(this).attr('class')).prepend('<img src=/home/nitin-gupta/Desktop/ERT-Mgt/images/expand.gif class=expand />');
					$('.toDosContainer .'+$(this).attr('class')+' img.expand').hide();
					
		     	$(this).append($(ui.draggable).clone());
		    	$('.toDosContainer .'+$(this).attr('class')).append($(ui.draggable).clone());	
		    	$('.toDosContainer .ui-draggable').append('<div class=task></div>');
		    	$('.rolesContainer .ui-draggable').prepend('<img src=/home/nitin-gupta/Desktop/ERT-Mgt/images/remove.png/>');
		     	$('.rolesContainer .emp img').hide();
		    	$('.rolesContainer .emp').removeClass('ui-draggable');
		    	$('.toDosContainer .emp').removeClass('ui-draggable');
		    	
		     }
         	
         	 else
     		 {
     	 		var that = this;
     			$('.rolesContainer .'+$(this).attr('class')).children('div').each(function(){
     				if(!($(this).attr('id')===$(ui.draggable).attr('id')))
     				{
     					if($(this).is(':last-child'))
     					{	
     						$(that).append($(ui.draggable).clone());
     						$('.rolesContainer .ui-draggable').prepend('<img src=/home/nitin-gupta/Desktop/ERT-Mgt/images/remove.png />');
     						$('.rolesContainer .emp img').hide();
	    					$('.toDosContainer .'+$(that).attr('class')).append($(ui.draggable).clone());	
	    					$('.toDosContainer .ui-draggable').append('<div class=task></div>');	
	    		
							$('.rolesContainer .emp').removeClass('ui-draggable');
							$('.toDosContainer .emp').removeClass('ui-draggable');
     					}
     				}
     				else
     				{
     					return false;
     				}
     			});
           	 }
           	 
           	  
			$('.rolesContainer .emp').mouseenter(function(){
	
			$(this).children('img').show(200);
			});
       	
	  		$('.rolesContainer .emp').mouseleave(function(){
		
			$(this).children('img').hide(200);
	
			});
			
			
			$('.rolesContainer .emp img').click(function(){
				var idVar = $($(this).parent()).attr('id');
				var clsVar = $($(this).parent().parent()).attr('class');

		   		$(this).parent().remove();
		   		$('.toDosContainer #'+idVar).remove();
		   		if(!($('.toDosContainer .'+clsVar).children('.emp').length))
		   		{
					$('.toDosContainer .'+clsVar).children('img').hide();
				}
       		});    	 
       
       		
       		$('img.expand').click(function(){
       			$(this).nextAll('.emp').show(200);
       			$(this).hide();
       			$(this).next('.collapse').show();
       		});
       			
       			
       		$('img.collapse').click(function(){
       			$(this).nextAll('.emp').hide(200);
       			$(this).hide();
       			$(this).prev('.expand').show();
       		});
         },
	});
});

$(function(){
	$('.emp').draggable({
		helper: 'clone'
	});
	
	$('.rolesContainer .ror,.rolesContainer .android,.rolesContainer .ios,.rolesContainer .js').droppable({
		 accept: '.emp',
		 addClasses: false,
         drop: function(event,ui){	
		     if(!$('.rolesContainer .'+$(this).attr('class')).children('div').length)
		     {
		     	$(this).append($(ui.draggable).clone());
		    	$('.toDosContainer .'+$(this).attr('class')).append($(ui.draggable).clone());	
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
		    					$('.toDosContainer .'+$(that).attr('class')).append($(ui.draggable).clone());	
		    					$('<textarea></textarea>').appendTo($('.toDosContainer .'+$(that).attr('class')));	
         					}
         				}
         				else
         				{
         					return false;
         				}
         			});
           	 }
           	 
           	  

           	 
           	 //$('div.rolesContainer').find('div.emp').hover(function(){
			
			//	$('<img/>').attr({'src':'/home/nitin-gupta/Desktop/ERT-Mgt/images/remove.png','display':'block'}).insertBefore($(this));
			
			//});
	      
         },
         
       

	});
	
});

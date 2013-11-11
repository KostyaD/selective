(function( $ ) {
	
  	$.fn.selective = function(options) {
	    
  		$(this).each(function() 
		{	
			var data = {};
			if($(this).data('speed')) { data.speed = $(this).data('speed'); };
	  		
	  		var def = $.extend( {
		      	'speed' : 100
		    }, options, data);
	    
	  		var _select = $(this);			
			$(_select).wrap('<div class="selective-wrap" />');
			var _wrap = $(_select).parent();
			$(_select).hide();
			var optionlist = [];
			var selected_val = $(_select).val();
			
			function getOptions() {
				$(_select).find('option').each(function()
				{
					if($(_select).val() != $(this).attr('value')) {
						optionlist.push('<div class="option" data-id="' + $(this).attr('value') + '">' + $(this).html() + '</div>');
					}
				});
			}
			
			getOptions();
			
			var options = optionlist.join('');
			var selected_str = $(_select).find('option[value=' + selected_val + ']').html();
			var selected = '<div class="selected">' + selected_str + '</div>';
			var selectVal = '<div class="selective">' + selected + '<div class="options">' + options + '</div></div>';
			$(_select).parent().append(selectVal);			
      		var count = 0;
      		
			$(_wrap).on('click', '.selected', function(event){
				if(count == 0) {
					$(_wrap).find('.options').slideDown(def.speed);
					count = 1;
				} else if(count == 1) {
					$(_wrap).find('.options').slideUp(def.speed);
					count = 0;
				}
			});
			
			$(_wrap).on('click', '.option', function(){
				$(_select).change();
				var valueid = $(this).data('id');
				$(_select).val(valueid);
				var optionVal = $(this).html();
				$(_wrap).find('.selected').html(optionVal)
				$(_wrap).find('.options').slideUp(def.speed, function(){
					optionlist = [];
					getOptions();
					var options = optionlist.join('');
					$(this).html(options);
				});
				count = 0;
			});
		});
	};
})(jQuery);

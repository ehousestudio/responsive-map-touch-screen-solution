$(function(){
	$.validator.addMethod("notDefaultText", function (value, element) {
	   if (value == $(element).attr('placeholder')) {
	      return false;
	   } else {
	       return true;
	     }
	});
	$('#back-top a').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    }); 
    $("#mc-embedded-subscribe-form").validate({
		rules: {
			EMAIL: {
				required: true,
				email: true
			}
		},
		message: {
			EMAIL: "Please enter a valid email address"
		}
	});
	$("#2").validate({
		rules: {
			full_name:{
				required: true,
				notDefaultText: true
			},
			email: {
				required: true,
				email: true,
				notDefaultText: true
			}
		},
		messages: {
			full_name: "Please enter your full name.",
			email: "Please enter a valid email address."
		}
	});
    $("p.subscribe-name").hover(function(){
			$('#mc-embedded-subscribe').addClass('active');
		}, function(){
			$('#mc-embedded-subscribe').removeClass('active');
	});
	
	svgeezy.init('nothing', 'png');
	
});
$(document).ready(function() { 
    animateSkillRatings();
    function animateSkillRatings() {
        var rates = $('.progress');
        rates.each(function(){            
            var r_val = ($(this).context.getAttribute("value")).trim();
            var timeElapsed = 3000;

            $(this).animate(
                {
                    'width': r_val + "%"
                },    
                timeElapsed
            );            

            /*$({ counter: 1 }).animate({ counter: 75 }, {
                duration: 3000,
                step: function() {
                    $(this).text("fsdfsf");
                }
            });*/
            //console.log();
        });
    }   
    //$('.progress').animate({'width':'75%'}, 3000);
  });
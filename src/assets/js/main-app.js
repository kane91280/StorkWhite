$(document).ready(function() { 
    animateSkillRatings();
    function animateSkillRatings() {
        var r_val;
        var rates = $('.progress');
        rates.each(function(){            
            r_val = ($(this).context.getAttribute("value")).trim();    
            r_id = ($(this).context.getAttribute("id")).trim();    
            var timeElapsed = 3000;            

            //console.log($(this));
            animateRatingProgresses(r_id, r_val);
            
        });
    }   

    function animateRatingProgresses(r_id, r_val) {
        var timeElapsed = 3000;
        $("#"+r_id).animate(
            {
                'width': r_val + "%"
            },    
            timeElapsed
        );            

        $({ counter: 1 }).animate({ counter: r_val }, {
            duration: 3000,
            step: function() {
                $("#"+r_id).text(Math.round(this.counter) + "%");                    
            }
        });    
    }
    //$('.progress').animate({'width':'75%'}, 3000);
  });
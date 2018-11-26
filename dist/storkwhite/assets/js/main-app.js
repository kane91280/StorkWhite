$(document).ready(function() {
    var scroll_cnt = 0;

    $('.parallax').parallax();    

    $(window).scroll(function(){
        controlScroll();        
    });    

    function controlScroll() {        
        if(isScrolledOnDiv("skills-section") && scroll_cnt == 0) {
            animateSkillRatings();          
            scroll_cnt++;  
        } else {            
        }
    }

    function isScrolledOnDiv(param) {        
        var topPivot = $(window).scrollTop();
        var bottomPivot = topPivot + $(window).height();

        var topElemOffset = $("#skills-section").offset().top;
        var bottomElemOffset = top + $("#skills-section").height();
        
        return bottomPivot >= topElemOffset;
    }
    
    //animateSkillRatings();
    function animateSkillRatings() {
        var r_val;
        var rates = $('.progress');
        rates.each(function(){            
            r_val = ($(this).context.getAttribute("value")).trim();    
            r_id = ($(this).context.getAttribute("id")).trim();    
            var timeElapsed = 3000;            
            
            animateRatingProgresses(r_id, r_val);            
        });
    }   

    function animateRatingProgresses(r_id, r_val) {
        var timeElapsed = 2000;
        $("#"+r_id).animate(
            {
                'width': r_val + "%"
            },    
            timeElapsed
        );            

        $({ counter: 1 }).animate({ counter: r_val }, {
            duration: timeElapsed - 1000,
            step: function() {
                $("#"+r_id).text(Math.round(this.counter) + "%");                    
            }
        });    
    } 
  });
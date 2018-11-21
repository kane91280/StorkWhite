$(document).ready(function() {

    $(window).scroll(function(){
        controlScroll();
        //console.log("window's scrolling");
    });

    

    function controlScroll() {
        //console.log("window's scrolling");
        if(isScrolledOnDiv("skills-section")) {
            animateSkillRatings();
            //console.log('in view');
        } else {
            //console.log('out of view');
        }
    }

    function isScrolledOnDiv(param) {
        //var elem = 
        //console.log($(elem));
        var topPivot = $(window).scrollTop();
        var bottomPivot = topPivot + $(window).height();

        var topElemOffset = $("#skills-section").offset().top;
        var bottomElemOffset = top + $("#skills-section").height();

        console.log("top pivot " + topPivot);
        //console.log("bottom pivot " + bottomPivot);
        console.log("top elem offset " + topElemOffset);
        //console.log("bottom elem offset " + bottomElemOffset);

        //return ((topElemOffset >= topPivot) && (bottomElemOffset <= bottomPivot));
        //return (topElemOffset >= topPivot);
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
            duration: timeElapsed,
            step: function() {
                $("#"+r_id).text(Math.round(this.counter) + "%");                    
            }
        });    
    } 
  });
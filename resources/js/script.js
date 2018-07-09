$(document).ready(function() {
    
    /* Sticky Navigation */
    $(".js--section-about").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '80px'
    });
    
    /* Scroll Buttons */
    $('.js--scroll-to-info').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });
    $('.js--scroll-to-hire').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });
    
    /* Smooth Scrolling */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Mobile Nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon')) {
            icon.removeClass('ion-navicon');
            icon.addClass('ion-android-close');
        } else {
            icon.removeClass('ion-android-close');
            icon.addClass('ion-navicon');
        }
    });
    
    /* Animation */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '100%'
    });
 
    $('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').each(function() {
			var barWidth = $(this).attr('aria-valuenow');
			$(this).width(barWidth + '%');
            console.log(this);
		}).delay(1000);
	}, {
		offset: '90%'
	});
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated slideInLeft');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated slideInRight');
    }, {
        offset: '80%'
    });
    
});
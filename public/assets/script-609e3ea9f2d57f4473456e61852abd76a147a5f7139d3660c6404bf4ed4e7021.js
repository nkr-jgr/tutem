// Toggle Menu
$(window).load(function() {
  $(".btn-nav").on("click tap", function() {
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
    $(this).toggleClass("animated");
  });
});


// Filtered Portfolio

var shuffleme = (function( $ ) {
  'use strict';
  var $grid = $('#grid'), //locate what we want to sort 
      $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories
      $sizer = $grid.find('.shuffle_sizer'),    //sizer stores the size of the items

  init = function() {

    // None of these need to be executed synchronously
    setTimeout(function() {
      listen();
      setupFilters();
    }, 100);

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '[class*="col-"]',
      sizer: $sizer    
    });
  },

      

// Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.portfolio-sorting li a').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  },



  listen = function() {
    var debouncedLayout = $.throttle( 300, function() {
      $grid.shuffle('update');
    });

    // Get all images inside shuffle
    $grid.find('img').each(function() {
      var proxyImage;

      // Image already loaded
      if ( this.complete && this.naturalWidth !== undefined ) {
        return;
      }

      // If none of the checks above matched, simulate loading on detached element.
      proxyImage = new Image();
      $( proxyImage ).on('load', function() {
        $(this).off('load');
        debouncedLayout();
      });

      proxyImage.src = this.src;
    });

    setTimeout(function() {
      debouncedLayout();
    }, 500);
  };      

  return {
    init: init
  };
}( jQuery ));

$(document).ready(function()
{
  shuffleme.init(); //filter portfolio
});

function myFunction() {
      var x, text;

      // Get the value of the input field with id="numb"
      x = document.getElementById("ex1").value;

      // If x is Not a Number or less than one or greater than 10 C21ASa1
      if (x != "CSRAM" ) {
      text = "Please enter a valid Session Code";
      } else {
         window.location.href = "https://drive.google.com/open?id=189oeyPWZfU9_M0F6KQ7_yEudQd_HQ6dy";
         text = "Please wait a second..."
      }
      document.getElementById("demo").innerHTML = text;
}
$(document).on("keypress", "input", function(e){
        if(e.which == 13){
            var inputVal = $(this).val();
            var x = document.getElementById("ex1").value;
            if (x != "CSRAM" ) {
            text = "Please enter a valid Session Code";
            alert( inputVal+ "is not a valid code.\nPls Call 9354534040 now.");
            } else {
               window.location.href = "https://drive.google.com/open?id=189oeyPWZfU9_M0F6KQ7_yEudQd_HQ6dy";
               text = "Please wait a second..."
            }
        }
});

$(function(){

    // localStorage.clear(); 

    $('body').toggleClass(localStorage.toggled);

    if(localStorage.toggled == 'light'){
      $('.mode span').html('dark');
    }

    function darkLight() {
      if (localStorage.toggled != 'light') {
          $('body, .portal').toggleClass('light', true);
          $('.mode span').html('dark');
          localStorage.toggled = "light";
      } else {
          $('body, .portal').toggleClass('light', false);
          $('.mode span').html('light');
          localStorage.toggled = "";
      }
    }

    $('.portal').click(function(){
      darkLight();
    });

  });
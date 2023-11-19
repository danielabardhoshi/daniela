$(document).ready(function() {
    $('#autoWidth,#autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            console.log('Slider loaded.');
            $('#autoWidth,#autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });
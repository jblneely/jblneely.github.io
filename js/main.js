   $(document).ready(function() {
       $('.parallax').parallax();


       $('.carousel.carousel-slider').carousel({ fullWidth: true });


       $('.button-collapse').sideNav({
           menuWidth: 300,
           edge: 'right',
           closeOnClick: true,
           draggable: true

       });

       $('.button-collapse').sideNav('show');

       $('.button-collapse').sideNav('hide');

       $('.button-collapse').sideNav('destroy');


   });

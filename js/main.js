/*
*
* Cours RIA1
* Crée par Nicolas Henry
* Dérnière modifications: 29.03.2018
*
*/

//Check the document is loaded
$( document ).ready( function () {

  //Start plugin 
  $.fn.slide = function () {
    //Show the first and hide other in css
    $( '#slider img' ).first().addClass('display');
    //Count number of image
    $( "#slider img" ).each( function( index ) {
      $( this ).attr('id',index);
      let i = 0;
      //Generate button for images
      while(i != index)
        i++;i++;
        $( '.slides' ).append(`<button id="${i}" class="btn-primary btn"> image ${i} </button>`);

    });

    $( "button" ).click( function () {

      //disable button on click
      $( 'button' ).prop('disabled', false);
      $( this ).prop('disabled', true);
      $imgId = this.id-1;
      imgData = `img#${$imgId}`;
      $( 'img' ).fadeOut(1000, "linear");
      $( 'img' ).removeClass('display');
      $( imgData ).fadeIn(1000, "linear");
      $( imgData ).addClass('display');

    });

    setInterval( function () {

      $maxSwitch = $( 'img' ).length;
      $( "img.display" ).fadeOut( function () {
        $( 'img' ).removeClass('display');
        let $current = $( this).prop('id');
        $current++;
        $( `img#${$current}` ).fadeIn(1000, "linear");
        $( `img#${$current}` ).addClass('display');

        if ( $maxSwitch == $current ) {
          $current = 0;
          $( `img#${$current}` ).fadeIn(1000, "linear");
          $( `img#${$current}` ).addClass('display');
        }

      });
    }, 5000);    

  };
  $( 'img' ).slide();
});
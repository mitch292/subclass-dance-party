$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 5000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    //function that will increase the size of the dancers upon mouseover
    $('.dancer').on('mouseover', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i].$node[0]  === this) {
          window.dancers[i].sizeUp();
        }
      }
    });

    //function will reduce the size of the dancer after we mouse off
    $('.dancer').on('mouseout', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i].$node[0]  === this) {
          window.dancers[i].sizeDown();
        }
      }
    });

    //when the dancers are clicked they will move to their side of the dancefloor
    $('.dancer').on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i].$node[0].x < 800) {
          window.dancers[i].moveLeft();
        } else {
          window.dancers[i].moveRight();
        }
      }
    });

  });

  //function to line our dancers up on when line up link up top is clicked
  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });

  });



});


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
    console.log(dancerMakerFunctionName)
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

    $('.dancer').on('mouseover', function(event) {
      // console.log('html element top and left', this)
      // console.log('dancers span', window.dancers[0].$node[0]);
      // console.log(window.dancers[0].$node[0] === this)

      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i].$node[0]  === this) {
          // console.log(window.dancers[i]);
          // console.log(window.dancers[i].$node[0].x);
          // console.log(window.dancers[i].$node[0].y);
          window.dancers[i].sizeUp();
        }
      }
    });

    $('.dancer').on('mouseout', function(event) {
      // console.log('html element top and left', this)
      // console.log('dancers span', window.dancers[0].$node[0]);
      // console.log(window.dancers[0].$node[0] === this)

      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i].$node[0]  === this) {
          window.dancers[i].sizeDown();
        }
      }
    });

    $('.dancer').on('click', function(event) {
      // console.log('html element top and left', this)
      // console.log('dancers span', window.dancers[0].$node[0]);
      // console.log(window.dancers[0].$node[0] === this)
      console.log('click')
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i].$node[0].x < 800) {
          window.dancers[i].moveLeft();
        } else {
          window.dancers[i].moveRight();
        }
      }
    });

  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });

  });



});


// // Creates and returns a new dancer object that can step
// class Dancer {
//   constructor (top, left, timeBetweenSteps) {
//     this.timeBetweenSteps = timeBetweenSteps;
//     this.$node = $('<span class="dancer"></span>');
//     this.step();
//     this.setPosition(top, left);
//   }
//   step() {
//     setTimeout(this.step.bind(this), this.timeBetweenSteps);
//   }
//   setPosition(top, left) {
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   }
//   lineUp() {
//     var styleSettings = {
//       top: top,
//       left: 0
//     };
//     this.$node.css(styleSettings);
//   }
//   sizeUp(){
//     var styleSettings = {
//       transform: 'scale(2.5)'
//     }
//     this.$node.css(styleSettings);
//   }
//   sizeDown() {
//     var styleSettings = {
//       transform: 'scale(1.0)'
//     }
//     this.$node.css(styleSettings);
//   }
//   moveLeft() {
//     var styleSettings = {
//       'left': '10px'
//     }
//     this.$node.css(styleSettings);
//   }
//   moveRight() {
//     var styleSettings = {
//       'left': '1750px'
//     }
//     this.$node.css(styleSettings);
//   }

// };
// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  //below line was originally dancer.$node
  this.$node = $('<span class="dancer"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step  = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.lineUp = function() {
  var styleSettings = {
    top: top,
    left: 0
  };
  this.$node.css(styleSettings);
}

Dancer.prototype.sizeUp = function() {
  var styleSettings = {
    transform: 'scale(2.5)'
  }
  this.$node.css(styleSettings);
}
Dancer.prototype.sizeDown = function() {
  var styleSettings = {
    transform: 'scale(1.0)'
  }
  this.$node.css(styleSettings);
}

Dancer.prototype.moveLeft = function() {
  var styleSettings = {
    'left': '10px'
  }
  this.$node.css(styleSettings);
}

Dancer.prototype.moveRight = function() {
  var styleSettings = {
    'left': '1750px'
  }
  this.$node.css(styleSettings);
}
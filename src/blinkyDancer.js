//es6 code commented below

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img src="img/ball.png" id="blinky" class="dancer"></img>');
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node;
};

// class BlinkyDancer extends Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     super();
//     this.$node = $('<img src="img/ball.png" id="blinky" class="dancer"></img>');
//     this.setPosition(top, left);
//   }
//   step() {
//     super.step()
//     this.$node;
//   }
// };
//window.BlinkyDancer = BlinkyDancer;
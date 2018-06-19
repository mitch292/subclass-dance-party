//es6 code is commented below
var StrobeDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span id="strobe" class="dancer"></span>');
  this.setPosition(top, left);
};

StrobeDancer.prototype = Object.create(Dancer.prototype);
StrobeDancer.prototype.constructor = StrobeDancer;

StrobeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node;
};


// class StrobeDancer extends Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     super();
//     this.$node = $('<span id="strobe" class="dancer"></span>');
//     this.setPosition(top, left);
//   }
//   step() {
//     super.step()
//     this.$node;
//   }
// };
// window.StrobeDancer = StrobeDancer;

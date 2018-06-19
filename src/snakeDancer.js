//es6 code is commented below

var SnakeDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span id="snake" class="dancer"></span>');
  this.setPosition(top, left);
};

SnakeDancer.prototype = Object.create(Dancer.prototype);
SnakeDancer.prototype.constructor = SnakeDancer;

SnakeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node;
};


// class SnakeDancer extends Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     super();
//     this.$node = $('<span id="snake" class="dancer"></span>');
//     this.setPosition(top, left);
//   }
//   step() {
//     super.step()
//     this.$node;
//   }
// };
//window.SnakeDancer = SnakeDancer;
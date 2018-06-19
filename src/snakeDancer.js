var SnakeDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.$node =this.$node = $('<span class="makeBlinkyDancer"></span>');
  this.$node = $('<span id="snake" class="dancer"></span>');
  this.setPosition(top, left);
};

SnakeDancer.prototype = Object.create(Dancer.prototype);
SnakeDancer.prototype.constructor = SnakeDancer;

SnakeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
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
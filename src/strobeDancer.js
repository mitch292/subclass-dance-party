var StrobeDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.$node =this.$node = $('<span class="makeStrobeDancer"></span>');
  this.$node = $('<span id="strobe" class="dancer"></span>');
  this.setPosition(top, left);
};

StrobeDancer.prototype = Object.create(Dancer.prototype);
StrobeDancer.prototype.constructor = StrobeDancer;

StrobeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
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

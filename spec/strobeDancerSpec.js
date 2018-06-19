describe('strobeDancer', function() {

  var strobeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    strobeDancer = new StrobeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(strobeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function', function() {
    sinon.spy(strobeDancer, 'step');
    strobeDancer.step();
    expect(strobeDancer.step.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(strobeDancer, 'step');

      expect(strobeDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      

      expect(strobeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(strobeDancer.step.callCount).to.be.equal(2);
    });
  });
});

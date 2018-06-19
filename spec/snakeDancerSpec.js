describe('snakeDancer', function() {

  var snakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    snakeDancer = new SnakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(snakeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function', function() {
    sinon.spy(snakeDancer, 'step');
    snakeDancer.step();
    expect(snakeDancer.step.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(snakeDancer, 'step');

      expect(snakeDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      

      expect(snakeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(snakeDancer.step.callCount).to.be.equal(2);
    });
  });
});

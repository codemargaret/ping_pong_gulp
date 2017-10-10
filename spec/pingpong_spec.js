var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('pingPong', function() {
  var reusablePingPong;

  beforeEach(function() {
    reusablePingPong = new Calculator()
  });
    it('replaces 3 with ping', function() {
      expect(reusablePingPong.pingPong(3)).toEqual([1, 2, "ping"])
    });

    it('replaces 5 with pong', function() {
      expect(reusablePingPong.pingPong(5)).toEqual([1, 2, "ping", 4, "pong"])
    });

});

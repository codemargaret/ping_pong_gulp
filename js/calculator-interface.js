var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calculator').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output;
    
    $("#add").click(function() {
      var output = simpleCalculator.addnum(num1, num2);
      $("#output").text(output);
    });

    $("#subtract").click(function() {
      var output = simpleCalculator.subtractnum(num1, num2);
      $("#output").text(output);
    });

    $("#multiply").click(function() {
      var output = simpleCalculator.multiplynum(num1, num2);
      $("#output").text(output);
    });

    $("#divide").click(function() {
      var output = simpleCalculator.dividenum(num1, num2);
      $("#output").text(output);
    });
  });
});

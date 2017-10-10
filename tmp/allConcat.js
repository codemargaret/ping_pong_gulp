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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

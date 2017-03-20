var answer = prompt("Please enter something");

var capitalize = function (answer) {
return answer.charAt(0).toUpperCase() + answer.charAt(answer.length-1).toUpperCase();
};

var capital = capitalize(answer);

var reverse = function (capital) {
	return capital.charAt(1) + capital.charAt(0); };

 var rever = reverse(capital);

 var final = function() {
  return answer + rever;
 };

alert(final());

var index = math.round((answer.length / 2));
alert(index);

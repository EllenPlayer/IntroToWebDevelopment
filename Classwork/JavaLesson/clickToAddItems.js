/*Creator: Ellen Player
  Date created: 18102020*/
  
  // These elements will be used in both functions.
var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

// checkValidility() is an imbuilt API function -if returns false 1+ inputs invalid.
	function validate() {

		numberFun.className = "needs-validation";

		if (!numberFun.checkValidity()) {
			numberFun.className = "was-validated";
			return false;
		}

		var operand1 = parseInt(num1.value, 10);
		var operand2 = parseInt(num2.value, 10);

		document.getElementById("addResult").innerText = operand1 + operand2;
		document.getElementById("subtractResult").innerText = operand1 - operand2;// innerText shows display at appropriate length 
		document.getElementById("multiplyResult").innerText = operand1 * operand2;
		document.getElementById("divideResult").innerText = operand1 / operand2;

		results.style.display = "block"; // makes the result table visible
		submitButton.innerText = "Recalculate";

		// We always return false so that the form doesn't submit.
		// Submission causes the page to reload.
		return false;
	}
	
	function resetView() {
		numberFun.className = "needs-validation";
		results.style.display = "none";
		submitButton.innerText = "Calculate";
		num1.focus();
	}
/**
 * ラジオボタンで選択されたフォーム形式を表示します。
 */
function changeForm() {

	var selectedForm = document.selectForm.selectedForm.value;

	// --------------createElement/removeChild--------------
	var parentForm = document.getElementById("parentForm");
	var rmChild = document.getElementById("createdForm");

	if (rmChild != null) {
		parentForm.removeChild(rmChild);
	}

	// 指定された形式で表示
	if (selectedForm === "select") {
		var newInput = document.createElement("select");
		var option = document.createElement("option");

		newInput.id = "createdForm";
		option.value = "1";

		newInput.appendChild(option);
		parentForm.appendChild(newInput);

	} else {
		var newInput = document.createElement("input");
		newInput.type = selectedForm;
		newInput.value = "";
		newInput.id = "createdForm";
		parentForm.appendChild(newInput);

	}

	// --------------innerHTML--------------
	var inner = document.getElementById("inner");

	// 指定された形式で表示
	if (selectedForm === "select") {
		inner.innerHTML = "<select id='inner'> <option> </select>";

	} else {
		inner.innerHTML = "<input id='inner' type=" + selectedForm + ">";

	}

	// --------------display block/none--------------
	document.getElementById("displaytext").style.display = "none";
	document.getElementById("displayradio").style.display = "none";
	document.getElementById("displaycheckbox").style.display = "none";
	document.getElementById("displayselect").style.display = "none";

	if (selectedForm != "") {
		document.getElementById("display" + selectedForm).style.display = "block";
	}
}

window.onload = function() {
	var radioText = document.getElementById("radioText");
	var radioRadio = document.getElementById("radioRadio");
	var radioCheck = document.getElementById("radioCheck");
	var radioSelect = document.getElementById("radioSelect");
	
	if (radioText != null) {
		radioText.addEventListener("click", changeForm, false);
	}
	
	if (radioRadio != null) {
		radioRadio.addEventListener("click", changeForm, false);
	}
	
	if (radioCheck != null) {
		radioCheck.addEventListener("click", changeForm, false);
	}
	
	if (radioSelect != null) {
		radioSelect.addEventListener("click", changeForm, false);
	}
}
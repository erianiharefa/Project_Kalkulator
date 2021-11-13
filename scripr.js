
	function insert(nbr) {
	if(document.form.textview.value == "0"){
	document.form.textview.value = nbr;
	}else if(document.form.textview.value == "" && nbr == "."){
	document.form.textview.value = "0.";
	}else if(document.form.textview.value == "" && (nbr == '+' || nbr == '-' || nbr == 'X' || nbr == '/'))
	{
	document.form.textview.value = "";
	}else
	document.form.textview.value = document.form.textview.value + nbr
	}
	function equals(){
	var exp = document.form.textview.value;
	if(exp)
	document.form.textview.value = eval(exp);
	}
	function clean() {
	document.form.textview.value = "";
	}
	function substring(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
	}
	
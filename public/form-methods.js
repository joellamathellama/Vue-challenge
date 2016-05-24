// export an object filled with our components methods
const fn = {};
module.exports = fn;

// Fill input forms with data via component "state" and validate
fn.fillForms = function(name, phone, email) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.validate();
}
// Validate the name field to have first and last
fn.checkName = function() {
	let nameEl = document.getElementById("my-form").children.name;
	if(nameEl.value.includes(" ")){
		nameEl.className = "form-control valid";
		this.nameError = false;
	}
	else{
		nameEl.className = "form-control invalid";
		this.nameError = true;
	}
}
// Validate the phone number field to be 10 digits long
fn.checkPhone = function() {
	let phoneEl = document.getElementById("my-form").children.phone;
	if(phoneEl.value.length === 10){
		phoneEl.className = "form-control valid";
		this.phoneError = false;
	}
	else{
		phoneEl.className = "form-control invalid";
		this.phoneError = true;
	}
}
// Validate email field has '@'
fn.checkEmail = function() {
	let emailEl = document.getElementById("my-form").children.email;
	if(emailEl.value.includes("@")){
		emailEl.className = "form-control valid";
		this.emailError = false;
	}
	else{
		emailEl.className = "form-control invalid";
		this.emailError = true;
	}
}
// Validate all input fields
fn.validate = function() {
	this.checkName();
	this.checkPhone();
	this.checkEmail();
}

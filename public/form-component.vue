<style scoped>
	.invalid{
		border-color: red;
	}
	.valid{
		border-color: green;
	}
	#my-form{
		width: 300px;
		margin: 50px auto;
	}
	.form-control{
		border-width: 3px;
		width: 250px;
	}
	.form-control-label{
		margin-right: 10px;
	}
	.invalid-msg{
		color: red;
	}
</style>

<template>
	<div>
		<form id="my-form">	
			<label class="form-control-label">Full name</label><label class="invalid-msg" v-show="nameError">Must be your full name</label>
			<input class="form-control" v-on:keyup="checkName" type="text" name="name" value={{name}} required>
			<label class="form-control-label">Phone number</label><label class="invalid-msg" v-show="phoneError">Must be 10 digits long</label>
			<input class="form-control" v-on:keyup="checkPhone" type="tel" name="phone" value={{phone}} required>
			<label class="form-control-label">Email address</label><label class="invalid-msg" v-show="emailError">Must be a valid email</label>
			<input class="form-control" v-on:keyup="checkEmail" type="email" name="email" value={{email}} required>
		</form>
	</div>
</template>

<script>
	export default {
		events: {
			'gotData': function(data) {
				let name = data.name,
						phone = data.phone,
						email = data.email;
				this.fillForms(name, phone, email);
			}
		},
		data() {
			return {
				name: "First Last",
				phone: 5555555555,
				email: "example@address.com",
				nameError: false,
				phoneError: false,
				emailError: false
			};
		},
	  methods: require('./form-methods.js')
	}
</script>
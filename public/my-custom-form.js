const Vue = require('vue');
const App = require('./form-component.vue');

new Vue({
  el: 'body',
  components: {
    app: App
  },
  methods: {
		getData() {
			return new Promise(
				function(res, rej) {
					setTimeout(function() {
						let data = JSON.stringify({
							name: "Joel Ahn",
							phone: 1231231234,
							email: "asdf@asdf.com"
						});
						res(data);
					}, Math.random() * 2000 + 1000);
				}
			);
		}
  },
  ready() {
  	const here = this;
  	here.getData()
  		.then(function(res) {
  			here.$broadcast('gotData', JSON.parse(res));
  		})
  		.catch(function(err) {
  			console.error("Inconceivable!", err);
  		})
  }
})

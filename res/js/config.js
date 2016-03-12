// http://bootsnipp.com/snippets/featured/dynamic-form-fields-add-amp-remove-bs3

function initConfig(addr) {
	$.getJSON("/api/config.json", function(config){
		["mycall", "locator", "secure_login_password"].forEach(function (k){
			if(config[k]){
				$('#'+k).val(config[k]);
			}
		});
	})
}

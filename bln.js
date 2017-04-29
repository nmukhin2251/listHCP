// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define(['text!bln.html'], function( htmlString) {

	/**
	 * COMPONENT MODEL CONSTRUCTOR
	 */
	function bln( params) { 
//debugger;		
		this.designmode = ko.observable().extend({form: "designmode"});				
	}
	
	/**
	 * COMPONENT MODEL METHODS
	 */
	(function(){
		//called by $init binding handler on html template
		this.$init = function(element) {
		};
	}).call(bln.prototype);
	
	/**
	 * OPTIONAL COMPONENT METADATA ENABLING VISUAL DESIGN SUPPORT
	 */
	bln.prototype.schema = {
		"Params": {
		},
		"Permalink": "http://spaforms365.com/docs/designer-model/"
	};
	 
    // Return component definition
    return { viewModel: bln, template: htmlString };
});


 //@ sourceURL=bln
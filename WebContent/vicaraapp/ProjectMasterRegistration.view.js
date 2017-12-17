sap.ui.jsview("vicaraapp.ProjectMasterRegistration", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.ProjectMasterRegistration
	 */
	getControllerName : function() {
		return "vicaraapp.ProjectMasterRegistration";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.ProjectMasterRegistration
	 */
	createContent : function(oController) {// Add footer and copyright
		var oFooter = new sap.m.Bar({
			design : sap.m.BarDesign.Footer,
			contentMiddle : [ new sap.m.Label({
				text : "© Copyright 2017 Vicara. All Rights Reserved."
			}) ]
		});

		// Create company logo image
		var oLogoImage = new sap.m.Image({
			src : "image/logo_Westernacher.jpg",
			height : "45px",
			width : "120px",
		});

		var oPage = new sap.m.Page({
			title : "Project Master Registration",
			headerContent : oLogoImage,
			footer : oFooter,
			content : [],
			showNavButton : true,
			navButtonPress : function(oEvt) {
				app.back();
			},
		});

		return oPage;
	}

});
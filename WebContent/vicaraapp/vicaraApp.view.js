sap.ui.jsview("vicaraapp.vicaraApp", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.vicaraApp
	 */
	getControllerName : function() {
		return "vicaraapp.vicaraApp";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.vicaraApp
	 */
	createContent : function(oController) {
		// Add welcome logo
		var oLogo = new sap.m.Text("idLogo", {
			text : "Login",
			width : "100%"
		}).addStyleClass("logoCss");

		// Add name input
		var oNameInput = new sap.m.Input("idNameInput", {
			placeholder : "Please enter your email address",
		}).addStyleClass("nameInputCss");

		// Add password input
		var oPasswordInput = new sap.m.Input("idPasswordInput", {
			type : "Password",
			placeholder : "Please enter your password",
			submit : [ oController.validation, oController ]
		}).addStyleClass("passwordInputCss");

		// Add register link
		var oUserRegistrationLink = new sap.m.Link("idUserRegistrationLink", {
			text : "New user? Click here to create new account!",
			subtle : true,
			press : [ oController.gotoUserRegistration, oController ]
		}).addStyleClass("userRegistrationLinkCss");

		// Add submit button
		var oSubmitButton = new sap.m.Button("idSubmitButton", {
			text : "Submit",
			press : [ oController.validation, oController ]
		}).addStyleClass("btnCss");

		// Add footer and copyright
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

		// Add components to Page
		var oPage = new sap.m.Page({
			title : "Welcome",
			headerContent : oLogoImage,
			content : [ oLogo, oNameInput, oPasswordInput,
					oUserRegistrationLink, oSubmitButton ],
			footer : oFooter
		}).addStyleClass("pageCss");

		return oPage;

	}

});
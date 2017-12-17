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
	createContent : function(oController) {

		// Input PSP element
		var oPspElementLabel = new sap.m.Label("idPspElementLabel", {
			text : "PSP Element",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oPspElementInput = new sap.m.Input("idPspElementInput", {
			placeholder : "Please enter PSP element",
			valueStateText : "PSP element cannot be empty.",
			liveChange : function() {
				if (this.getValue() === "") {
					// if the field is empty after change, it will go red
					this.setValueState(sap.ui.core.ValueState.Error);
				} else {
					// if the field is not empty after change, the value state
					// (if any) is removed
					this.setValueState(sap.ui.core.ValueState.None);
				}
			}
		}).addStyleClass("userRegistrationInputsCss");

		// Input project name
		var oProjectNameLabel = new sap.m.Label("idProjectNameLabel", {
			text : "Project Name",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oProjectNameInput = new sap.m.Input("idProjectNameInput", {
			placeholder : "Please enter project name",
			valueStateText : "Project name cannot be empty.",
			liveChange : function() {
				if (this.getValue() === "") {
					// if the field is empty after change, it will go red
					this.setValueState(sap.ui.core.ValueState.Error);
				} else {
					// if the field is not empty after change, the value state
					// (if any) is removed
					this.setValueState(sap.ui.core.ValueState.None);
				}
			}
		}).addStyleClass("userRegistrationInputsCss");

		// input project start date
		var oProjectStartDateLabel = new sap.m.Label("idProjectStartDateLabel",
				{
					text : "Start Date",
					required : true,
				}).addStyleClass("userRegistrationInputsCss");

		var oProjectStartDatePicker = new sap.m.DatePicker(
				"idProjectStartDatePicker", {
					valueFormat : "yyyy-MM-dd",
				}).addStyleClass("userRegistrationInputsCss");

		// input project end date
		var oProjectEndDateLabel = new sap.m.Label("idProjectEndDateLabel", {
			text : "End Date",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oProjectEndDatePicker = new sap.m.DatePicker(
				"idProjectEndDatePicker", {
					valueFormat : "yyyy-MM-dd",
				}).addStyleClass("userRegistrationInputsCss");

		// input fixed price
		var oProjectFixedPriceLabel = new sap.m.Label("idProjectFixedPriceLabel", {
			text : "Fixed Price",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");
		
		// Define items in fixed price
		var oFixedTrue = new sap.ui.core.Item({
			text : "True",
		});

		var oFixedFalse = new sap.ui.core.Item({
			text : "False",
		});
		
		// Define Select fixed price List
		var oFixedPriceInput = new sap.m.Select("idFixedPriceInput", {
			items : [ oFixedTrue, oFixedFalse,],
		}).addStyleClass("userRegistrationInputsCss");
		
		// Create project button
		var oCreateProjectButton = new sap.m.Button("idCreateProjectButton", {
			text : "Create Project",
			press : [ oController.projectRegistration, oController ]
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

//		var oFlexBox = new sap.m.FlexBox({
//			direction : "Column",
//			alignItems : "Center",
//			justifyContent : "Center",
//			fitContainer : true,
//			items : [],
//		});
		
		var oPage = new sap.m.Page({
			title : "Project Master Registration",
			headerContent : oLogoImage,
			footer : oFooter,
			content : [oPspElementLabel, oPspElementInput, oProjectNameLabel,
				oProjectNameInput, oProjectStartDateLabel,
				oProjectStartDatePicker, oProjectEndDateLabel,
				oProjectEndDatePicker,oProjectFixedPriceLabel,oFixedPriceInput,oCreateProjectButton],
			showNavButton : true,
			enableScrolling : false,
			navButtonPress : function(oEvt) {
				app.back();
			},
		});

		return oPage;
	}

});
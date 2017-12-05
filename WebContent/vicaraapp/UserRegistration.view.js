sap.ui.jsview("vicaraapp.UserRegistration", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.UserRegistration
	 */
	getControllerName : function() {
		return "vicaraapp.UserRegistration";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.UserRegistration
	 */
	createContent : function(oController) {

		var oFirstNameLabel = new sap.m.Label("idFirstNameLabel", {
			text : "First Name",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oFirstNameInput = new sap.m.Input("idFirstNameInput", {
			placeholder : "Please enter your first name",
			valueStateText : "First name cannot be empty.",
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

		var oMiddleNameLabel = new sap.m.Label("idMiddleNameLabel", {
			text : "Middle Name",
		}).addStyleClass("userRegistrationInputsCss");

		var oMiddleNameInput = new sap.m.Input("idMiddleNameInput", {
			placeholder : "Please enter your middle name",
		}).addStyleClass("userRegistrationInputsCss");

		var oLastNameLabel = new sap.m.Label("idLastNameLabel", {
			text : "Last Name",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oLastNameInput = new sap.m.Input("idLastNameInput", {
			placeholder : "Please enter your last name",
			valueStateText : "Last name cannot be empty.",
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

		var oEmployeeIDLabel = new sap.m.Label("idEmployeeIDLabel", {
			text : "Employee ID",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oEmployeeIDInput = new sap.m.Input("idEmployeeIDInput", {
			placeholder : "Please enter your Employee ID",
			valueStateText : "Employee ID cannot be empty.",
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

		var oEmail1Label = new sap.m.Label("idEmail1Label", {
			text : "Email",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		
		firstEmail = "";
		var oEmail1Input = new sap.m.Input("idEmail1Input", {
			placeholder : "Please enter your Email Address",
			valueStateText : "Email cannot be empty.",
			type : "Email",
			liveChange : function() {
				if (this.getValue() === "") {
					// if the field is empty after change, it will go red
					this.setValueState(sap.ui.core.ValueState.Error);
				} else {
					// if the field is not empty after change, the value state
					// (if any) is removed
					this.setValueState(sap.ui.core.ValueState.None);
				}
				
				firstEmail = this.getValue();
				
			}
		}).addStyleClass("userRegistrationInputsCss");

		var oEmail2Label = new sap.m.Label("idEmail2Label", {
			text : "Confirm Email",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oEmail2Input = new sap.m.Input("idEmail2Input", {
			placeholder : "Please re-enter your Email Address",
			valueStateText : "Email does not match.",
			type : "Email",
			liveChange : function() {
				if (this.getValue() !== firstEmail) {
					// if the field is empty after change, it will go red
					this.setValueState(sap.ui.core.ValueState.Error);
				} else {
					// if the field is not empty after change, the value state
					// (if any) is removed
					this.setValueState(sap.ui.core.ValueState.None);
				}
			}
		}).addStyleClass("userRegistrationInputsCss");

		var oPassword1Label = new sap.m.Label("idPassword1Label", {
			text : "Password",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		
		firstPasswrod = "";
		var oPassword1Input = new sap.m.Input("idPassword1Input", {
			placeholder : "Please enter your password",
			valueStateText : "Password cannot be empty.",
			type : "Password",
			liveChange : function() {		
				if (this.getValue() === "") {
					// if the field is empty after change, it will go red
					this.setValueState(sap.ui.core.ValueState.Error);
				} else {
					// if the field is not empty after change, the value state
					// (if any) is removed
					this.setValueState(sap.ui.core.ValueState.None);
				}
				firstPassword = this.getValue();
			}
			
		}).addStyleClass("userRegistrationInputsCss");

		var oPassword2Label = new sap.m.Label("idPassword2Label", {
			text : "Confirm Password",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oPassword2Input = new sap.m.Input("idPassword2Input", {
			placeholder : "Please re-enter your password",
			valueStateText : "Password does not match.",
			type : "Password",
			liveChange : function() {			
				if (this.getValue() !== firstPassword) {
					// if the field is empty after change, it will go red
					this.setValueState(sap.ui.core.ValueState.Error);
				} else {
					// if the field is not empty after change, the value state
					// (if any) is removed
					this.setValueState(sap.ui.core.ValueState.None);
				}
				
			}
		}).addStyleClass("userRegistrationInputsCss");

		var oRoleLabel = new sap.m.Label("idRoleLabel", {
			text : "Role",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		// Define items in Select
		var oRole1 = new sap.ui.core.Item("role1", {
			text : "Project Member",
		});

		var oRole2 = new sap.ui.core.Item("role2", {
			text : "Project Manager",
		});

		var oRole3 = new sap.ui.core.Item("role3", {
			text : "Consulting Manager",
		});

		var oLevel1 = new sap.ui.core.Item("level1", {
			text : "Level 1",
		});

		var oLevel2 = new sap.ui.core.Item("level2", {
			text : "Level 2",
		});

		var oLevel3 = new sap.ui.core.Item("level3", {
			text : "Level 3",
		});
		// Define Select List
		var oRoleInput = new sap.m.Select("idRoleInput", {
			items : [ oRole1, oRole2, oRole3 ],
		}).addStyleClass("userRegistrationInputsCss");

		var oLevelLabel = new sap.m.Label("idLevelLabel", {
			text : "Level",
			required : true,
		}).addStyleClass("userRegistrationInputsCss");

		var oLevelInput = new sap.m.Select("idLevelInput", {
			items : [ oLevel1, oLevel2, oLevel3 ],
		}).addStyleClass("userRegistrationInputsCss");

		var oCreateUserButton = new sap.m.Button("idCreateUserButton", {
			text : "Create Account",
			press : [ oController.userRegistration, oController ]
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

		var oPage = new sap.m.Page({
			title : "User Registration",
			headerContent : oLogoImage,
			footer : oFooter,
			content : [ oFirstNameLabel, oFirstNameInput, oMiddleNameLabel,
					oMiddleNameInput, oLastNameLabel, oLastNameInput,
					oEmployeeIDLabel, oEmployeeIDInput, oEmail1Label,
					oEmail1Input, oEmail2Label, oEmail2Input, oPassword1Label,
					oPassword1Input, oPassword2Label, oPassword2Input,
					oRoleLabel, oRoleInput, oLevelLabel, oLevelInput,oCreateUserButton ],
			showNavButton : true,
			navButtonPress : function(oEvt) {
				app.back();
			},
		});

		return oPage;
	}

});
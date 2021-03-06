sap.ui.controller("vicaraapp.vicaraApp", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf vicaraapp.vicaraApp
	 */
	onInit : function() {

		// Odata (Json) data, which will retrieve from back-end in real app
		var oData = {
			"names" : [ {
				id : 1,
				Name : "Songyuan",
				Password : "1234",
				Role : "ProjectMember"
			}, {
				id : 2,
				Name : "Ram",
				Password : "1234",
				Role : "ProjectManager"
			}, {
				id : 3,
				Name : "Ronny",
				Password : "1234",
				Role : "ConsultingManager"
			}, {
				id : 4,
				Name : "Jingyi",
				Password : "1234",
				Role : "ProjectMember"
			}, ]
		};

		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel);
	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf vicaraapp.vicaraApp
	 */
	// onBeforeRendering: function() {
	//		 
	// },
	// Validation function to verify login user name and password
	validation : function(oEvt) {

		var oInputName = sap.ui.getCore().byId("idNameInput").getValue();
		var oInputPassword = sap.ui.getCore().byId("idPasswordInput")
				.getValue();

		if (oInputName === "" || oInputPassword === ""
				|| oInputName === undefined || oInputPassword === undefined) {
			sap.m.MessageToast.show("Please enter username and/or password!");
		}

		// Get property of model by key
		var accountsJson = sap.ui.getCore().getModel().getProperty("/names");

		// To determine if login is succeed
		var loginFlag = false;
		// To compare login information using for loop
		for (var i = 0; i < accountsJson.length; i++) {
			var obj = accountsJson[i];
			if (oInputName === obj.Name && oInputPassword === obj.Password) {
				loginFlag = true;
				this.gotoSecondPage(obj);
				break;
			}
		}

		//If username or password wrong, toast message and clear inputs
		if (loginFlag === false && oInputName !== "" && oInputPassword !== "") {
			sap.m.MessageToast.show("Username and/or password incorrect!");
			var oUserName = sap.ui.getCore().byId("idNameInput");
			oUserName.setValue();
			var oUserPwd = sap.ui.getCore().byId("idPasswordInput");
			oUserPwd.setValue();
		}

	},

	// Go to user home page (second page of app) by different role of user
	gotoSecondPage : function(oAccount) {

		var oInputName = sap.ui.getCore().byId("idNameInput").getValue();

		if (oAccount.Role === "ProjectMember") {
			var oLabel = sap.ui.getCore().byId("idUserName_projectMember");
			oLabel.setText(oInputName);
			app.to("projectMemberHome1");
		} else if (oAccount.Role === "ProjectManager") {
			var oLabel = sap.ui.getCore().byId("idUserName_projectManager");
			oLabel.setText(oInputName);
			app.to("projectManagerHome1");
		} else if (oAccount.Role === "ConsultingManager") {
			var oLabel = sap.ui.getCore().byId("idUserName_projectManager");
			oLabel.setText(oInputName);
			app.to("consultingManagerHome1");
		} else {
			sap.m.MessageToast.show("Limit of authority");
		}

	},

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf vicaraapp.vicaraApp
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf vicaraapp.vicaraApp
 */
// onExit: function() {
//
// }
});
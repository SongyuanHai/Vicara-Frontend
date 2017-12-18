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

	// Validation function to verify login user name and
	// password
	validation : function(oEvt) {

		var oInputName = sap.ui.getCore().byId("idNameInput").getValue();
		var oInputPassword = sap.ui.getCore().byId("idPasswordInput")
				.getValue();

		if (oInputName === "" || oInputPassword === ""
				|| oInputName === undefined || oInputPassword === undefined) {
			sap.m.MessageToast.show("Please enter username and/or password!");

		} else {
			var credential = {
				username : oInputName,
				password : oInputPassword
			}

			$.ajax({
				method : 'POST',
				url : 'http://127.0.0.1:8000/api/v1/login/',
				data : credential,
				// dataType : 'json',
				// crossDomain : true,
				success : function(data, textStatus, jqXHR) {
					console.log(data);
					console.log(data.id);
					console.log(textStatus);
					console.log(jqXHR);

					$.ajaxSetup({
						beforeSend : function(xhr) {
							xhr.setRequestHeader('Authorization', 'Token '
									+ data.token);
						}
					});

					user_url = 'http://127.0.0.1:8000/api/v1/profile/'
							+ data.id + '/';
					$.ajax({
						method : 'GET',
						url : user_url,
						// crossDomain : true,
						dataType : 'json',
						success : function(userData) {
							console.log(userData);
							sap.ui.controller("vicaraapp.vicaraApp")
									.gotoSecondPage(userData);

						},
						error : function(xhr, readyState) {
							console.log("Error: " + readyState);
							console.log("Getting user info error");
						}

					});
					// app.to("projectManagerHome1");
				},
				error : function(xhr, readyState) {
					sap.m.MessageToast
							.show("Username and/or password incorrect!");
					var oUserName = sap.ui.getCore().byId("idNameInput");
					var oUserPwd = sap.ui.getCore().byId("idPasswordInput");
					oUserPwd.setValue();
					oUserName.setValue();
					console.log(xhr);
					console.log("ERROR: " + readyState);
				}
			});
		}

		// Get property of model by key
		// var accountsJson =
		// sap.ui.getCore().getModel().getProperty("/names");

		// To determine if login is succeed
		// var loginFlag = false;
		// To compare login information using for loop
		// for (var i = 0; i < accountsJson.length; i++) {
		// var obj = accountsJson[i];
		// if (oInputName === obj.Name && oInputPassword ===
		// obj.Password) {
		// loginFlag = true;
		// this.gotoSecondPage(obj);
		// break;
		// }
		// }

		// If username or password wrong, toast message and
		// clear inputs
		// if (loginFlag === false && oInputName !== "" &&
		// oInputPassword !==
		// "") {
		// sap.m.MessageToast.show("Username and/or password
		// incorrect!");
		// var oUserName = sap.ui.getCore().byId("idNameInput");
		// oUserName.setValue();
		// var oUserPwd =
		// sap.ui.getCore().byId("idPasswordInput");
		// oUserPwd.setValue();
		// }

	},

	// Go to user home page (second page of app) by different
	// role of user
	gotoSecondPage : function(oAccount) {
		oInputName = oAccount.first_name;
		if (oAccount.role === "Project Member") {
			var oLabel = sap.ui.getCore().byId("idUserName_projectMember");
			oLabel.setText(oInputName);
			app.to("projectMemberHome1");
			var eventBus = sap.ui.getCore().getEventBus();
			// 1. ChannelName, 2. EventName, 3. the data
			eventBus.publish("HomeProjectManagerChannel", "onNavigateEvent", oAccount);
		} else if (oAccount.role === "Project Manager") {
			var oLabel = sap.ui.getCore().byId("idUserName_projectManager");
			oLabel.setText(oInputName);
			app.to("projectManagerHome1");
			var eventBus = sap.ui.getCore().getEventBus();
			// 1. ChannelName, 2. EventName, 3. the data
			eventBus.publish("HomeProjectManagerChannel", "onNavigateEvent", oAccount);
		} else if (oAccount.role === "Consulting Manager") {
			var oLabel = sap.ui.getCore().byId("idUserName_ConsutingManager");
			oLabel.setText(oInputName);
			app.to("consultingManagerHome1");
		} else if (oAccount.role === "Admin") {
			var oLabel = sap.ui.getCore().byId("idUserName_admin");
			oLabel.setText(oInputName);
			app.to("adminHome1");
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
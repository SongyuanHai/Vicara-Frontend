sap.ui.controller("vicaraapp.UserRegistration",
		{

			/**
			 * Called when a controller is instantiated and its View controls
			 * (if available) are already created. Can be used to modify the
			 * View before it is displayed, to bind event handlers and do other
			 * one-time initialization.
			 * 
			 * @memberOf vicaraapp.UserRegistration
			 */
			// onInit: function() {
			//
			// },
			// create new user
			userRegistration : function(oEvt) {

				var oFirstName = sap.ui.getCore().byId("idFirstNameInput")
						.getValue();
				var oMiddleName = sap.ui.getCore().byId("idMiddleNameInput")
						.getValue();
				var oLastName = sap.ui.getCore().byId("idLastNameInput")
						.getValue();
				var oEmployeeID = sap.ui.getCore().byId("idEmployeeIDInput")
						.getValue();
				var oEmail = sap.ui.getCore().byId("idEmail2Input").getValue();
				var oPassword = sap.ui.getCore().byId("idPassword2Input")
						.getValue();
				var oRole = sap.ui.getCore().byId("idRoleInput")
						.getSelectedItem().getText();
				var oLevel = sap.ui.getCore().byId("idLevelInput")
						.getSelectedItem().getText();
				console.log(oEmail + "-----" + oRole + "-----" + oLevel);

				if (oMiddleName !== undefined && oMiddleName === "") {
					oMiddleName = "N/A";
				}

				if (oFirstName === "" || oLastName === "" || oEmployeeID === ""
						|| oEmail === "" || oPassword === "" || oRole === ""
						|| oLevel === "" || oFirstName === undefined
						|| oMiddleName === undefined || oLastName === undefined
						|| oEmployeeID === undefined || oEmail === undefined
						|| oPassword === undefined || oRole === undefined
						|| oLevel === undefined) {
					sap.m.MessageToast
							.show("Please enter all required fields!");
				} else {

					var submitData = {
						email : oEmail,
						first_name : oFirstName,
						middle_name : oMiddleName,
						last_name : oLastName,
						employeeID : oEmployeeID,
						role : oRole,
						level : oLevel,
						password : oPassword,
					}

					$.ajax({
						method : 'POST',
						url : 'http://127.0.0.1:8000/api/v1/profile/',
						data : submitData,
						// dataType : 'json',
						// crossDomain : true,
						success : function(data, textStatus, jqXHR) {
							sap.m.MessageToast.show("Create success!");
							var oFirstName = sap.ui.getCore().byId(
									"idFirstNameInput");
							var oMiddleName = sap.ui.getCore().byId(
									"idMiddleNameInput");
							var oLastName = sap.ui.getCore().byId(
									"idLastNameInput");
							var oEmployeeID = sap.ui.getCore().byId(
									"idEmployeeIDInput");
							var oEmail1 = sap.ui.getCore()
									.byId("idEmail1Input");
							var oEmail2 = sap.ui.getCore()
									.byId("idEmail2Input");
							var oPassword1 = sap.ui.getCore().byId(
									"idPassword1Input");
							var oPassword2 = sap.ui.getCore().byId(
									"idPassword2Input");
							oFirstName.setValue();
							oMiddleName.setValue();
							oLastName.setValue();
							oEmployeeID.setValue();
							oEmail1.setValue();
							oEmail2.setValue();
							oPassword1.setValue();
							oEmail2.setValue();
							app.back();
							console.log(data);
							console.log(textStatus);
							console.log(jqXHR);
						},
						error : function(res, xhr, readyState) {
							sap.m.MessageToast
									.show("Create new user failed! Code: "
											+ res.responseText);
							console.log(res.responseText);
							console.log(xhr);
							console.log("ERROR: " + readyState);
						}
					});
				}

			},

			/**
			 * Similar to onAfterRendering, but this hook is invoked before the
			 * controller's View is re-rendered (NOT before the first rendering!
			 * onInit() is used for that one!).
			 * 
			 * @memberOf vicaraapp.UserRegistration
			 */
			// onBeforeRendering: function() {
			//
			// },
			/**
			 * Called when the View has been rendered (so its HTML is part of
			 * the document). Post-rendering manipulations of the HTML could be
			 * done here. This hook is the same one that SAPUI5 controls get
			 * after being rendered.
			 * 
			 * @memberOf vicaraapp.UserRegistration
			 */
			onAfterRendering : function() {
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free
		 * resources and finalize activities.
		 * 
		 * @memberOf vicaraapp.UserRegistration
		 */
		// onExit: function() {
		//
		// }
		});
sap.ui.controller("vicaraapp.ProjectMasterRegistration",
		{

			/**
			 * Called when a controller is instantiated and its View controls
			 * (if available) are already created. Can be used to modify the
			 * View before it is displayed, to bind event handlers and do other
			 * one-time initialization.
			 * 
			 * @memberOf vicaraapp.ProjectMasterRegistration
			 */
			// onInit: function() {
			//
			// },
			projectRegistration : function(oEvt) {

				var oPspElement = sap.ui.getCore().byId("idPspElementInput")
						.getValue();
				var oProjectName = sap.ui.getCore().byId("idProjectNameInput")
						.getValue();
				var oStartDate = sap.ui.getCore().byId(
						"idProjectStartDatePicker").getValue();
				var oEndDate = sap.ui.getCore().byId("idProjectEndDatePicker")
						.getValue();
				var oFixedPrice = sap.ui.getCore().byId("idFixedPriceInput")
						.getSelectedItem().getText();

				var priceFlag = true;
				if (oFixedPrice === "False") {
					priceFlag = false;
				}
				console
						.log(oPspElement + "-----" + oProjectName + "-----"
								+ oStartDate + "-----" + oEndDate + "-----"
								+ priceFlag);

				if (oPspElement === "" || oProjectName === ""
						|| oStartDate === "" || oEndDate === ""
						|| oFixedPrice === "" || oPspElement === undefined
						|| oProjectName === undefined
						|| oStartDate === undefined || oEndDate === undefined
						|| oFixedPrice === undefined) {
					sap.m.MessageToast
							.show("Please enter all required fields!");
				} else {

					var submitData = {
						psp_element : oPspElement,
						project_name : oProjectName,
						start_date : oStartDate,
						end_date : oEndDate,
						fixed_price : priceFlag,
					}

					$.ajax({
						method : 'POST',
						url : 'http://127.0.0.1:8000/api/v1/project_master/',
						data : submitData,
						// dataType : 'json',
						// crossDomain : true,
						success : function(data, textStatus, jqXHR) {
							sap.m.MessageToast.show("Create success!");
//							var oFirstName = sap.ui.getCore().byId(
//									"idFirstNameInput");
//							var oMiddleName = sap.ui.getCore().byId(
//									"idMiddleNameInput");
//							var oLastName = sap.ui.getCore().byId(
//									"idLastNameInput");
//							var oEmployeeID = sap.ui.getCore().byId(
//									"idEmployeeIDInput");
//							var oEmail1 = sap.ui.getCore()
//									.byId("idEmail1Input");
//							var oEmail2 = sap.ui.getCore()
//									.byId("idEmail2Input");
//							var oPassword1 = sap.ui.getCore().byId(
//									"idPassword1Input");
//							var oPassword2 = sap.ui.getCore().byId(
//									"idPassword2Input");
//							oFirstName.setValue();
//							oMiddleName.setValue();
//							oLastName.setValue();
//							oEmployeeID.setValue();
//							oEmail1.setValue();
//							oEmail2.setValue();
//							oPassword1.setValue();
//							oEmail2.setValue();
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
		 * @memberOf vicaraapp.ProjectMasterRegistration
		 */
		// onBeforeRendering: function() {
		//
		// },
		/**
		 * Called when the View has been rendered (so its HTML is part of the
		 * document). Post-rendering manipulations of the HTML could be done
		 * here. This hook is the same one that SAPUI5 controls get after being
		 * rendered.
		 * 
		 * @memberOf vicaraapp.ProjectMasterRegistration
		 */
		// onAfterRendering: function() {
		//
		// },
		/**
		 * Called when the Controller is destroyed. Use this one to free
		 * resources and finalize activities.
		 * 
		 * @memberOf vicaraapp.ProjectMasterRegistration
		 */
		// onExit: function() {
		//
		// }
		});
sap.ui
		.controller(
				"vicaraapp.HourRecording",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf vicaraapp.HourRecording
					 */
					// onInit: function() {
					//
					// },
					hourRecording : function(oEvt) {
						var oEmployeeID = sap.ui.getCore().byId(
								"idHrRcdEmployeeIDInput").getValue();

						var oEmployeeName = sap.ui.getCore().byId(
								"idHrRcdNameInput").getValue();

						var oLocation = sap.ui.getCore()
								.byId("idLocationInput").getValue();

						var oProjectCode = sap.ui.getCore().byId(
								"idProjectCodeInput").getValue();

						var oDate = sap.ui.getCore()
								.byId("idProjectDatePicker").getValue();

						var oStartTime = sap.ui.getCore().byId(
								"idProjectStartTimePicker").getValue();

						var oEndTime = sap.ui.getCore().byId(
								"idProjectEndTimePicker").getValue();

						var oBreakTime = sap.ui.getCore().byId(
								"idProjectBreakTimePicker").getValue();

						var oWorkTime = sap.ui.getCore().byId(
								"idProjectWorkTimePicker").getValue();

						var oDescription = sap.ui.getCore().byId(
								"idProjectDescriptionInput").getValue();

						var oApprovelStatus = "Pending";

						console.log("----Start Time format----" + oStartTime);

						if (oEmployeeID === "" || oEmployeeName === ""
								|| oLocation === "" || oProjectCode === ""
								|| oDate === "" || oStartTime === ""
								|| oEndTime === "" || oBreakTime === ""
								|| oWorkTime === "" || oDescription === ""
								|| oEmployeeID === undefined
								|| oEmployeeName === undefined
								|| oLocation === undefined
								|| oProjectCode === undefined
								|| oDate === undefined
								|| oStartTime === undefined
								|| oEndTime === undefined
								|| oBreakTime === undefined
								|| oWorkTime === undefined
								|| oDescription === undefined) {
							sap.m.MessageToast
									.show("Please enter all required fields!");
						} else {

							var submitData = {
								employeeID : oEmployeeID,
								name : oEmployeeName,
								location : oLocation,
								project_code : oProjectCode,
								date : oDate,
								start_time : oStartTime,
								end_time : oEndTime,
								break_hour : oBreakTime,
								work_hour : oWorkTime,
								approval_status : oApprovelStatus,
								description : oDescription,
							}

							$
									.ajax({
										method : 'POST',
										url : 'http://127.0.0.1:8000/api/v1/timesheet/',
										data : submitData,
										// dataType : 'json',
										// crossDomain : true,
										success : function(data, textStatus,
												jqXHR) {
											sap.m.MessageToast
													.show("Create success!");

											sap.ui.getCore().byId(
													"idHrRcdEmployeeIDInput")
													.setValue();
											sap.ui.getCore().byId(
													"idHrRcdNameInput")
													.setValue();
											sap.ui.getCore().byId(
													"idLocationInput")
													.setValue();
											sap.ui.getCore().byId(
													"idProjectCodeInput")
													.setValue();
											sap.ui.getCore().byId(
													"idProjectDatePicker")
													.setValue();
											sap.ui.getCore().byId(
													"idProjectStartTimePicker")
													.setValue();
											sap.ui.getCore().byId(
													"idProjectEndTimePicker")
													.setValue();
											sap.ui.getCore().byId(
													"idProjectBreakTimePicker")
													.setValue();
											sap.ui.getCore().byId(
													"idProjectWorkTimePicker")
													.setValue();
											sap.ui
													.getCore()
													.byId(
															"idProjectDescriptionInput")
													.setValue();
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
				 * Similar to onAfterRendering, but this hook is invoked before
				 * the controller's View is re-rendered (NOT before the first
				 * rendering! onInit() is used for that one!).
				 * 
				 * @memberOf vicaraapp.HourRecording
				 */
				// onBeforeRendering: function() {
				//
				// },
				/**
				 * Called when the View has been rendered (so its HTML is part
				 * of the document). Post-rendering manipulations of the HTML
				 * could be done here. This hook is the same one that SAPUI5
				 * controls get after being rendered.
				 * 
				 * @memberOf vicaraapp.HourRecording
				 */
				// onAfterRendering: function() {
				//
				// },
				/**
				 * Called when the Controller is destroyed. Use this one to free
				 * resources and finalize activities.
				 * 
				 * @memberOf vicaraapp.HourRecording
				 */
				// onExit: function() {
				//
				// }
				});
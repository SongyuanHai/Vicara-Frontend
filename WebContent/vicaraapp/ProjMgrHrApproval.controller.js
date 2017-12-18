sap.ui
		.controller(
				"vicaraapp.ProjMgrHrApproval",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf vicaraapp.ProjMgrHrApproval
					 */
					onInit : function() {
						var eventBus = sap.ui.getCore().getEventBus();
						// 1. ChannelName, 2. EventName, 3. Function to be
						// executed, 4. Listener
						eventBus.subscribe(
								"HomeProjectManagerHourApprovalChannel",
								"onNavigateEvent", this.onUserDataReceived,
								this);
					},

					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf vicaraapp.ProjMgrHrApproval
					 */
					// onBeforeRendering: function() {
					//
					// },

					onUserDataReceived : function(channel, event, data) {

						email = data.email;
						console.log("----User email ----" + email);
						user_url = 'http://127.0.0.1:8000/api/v1/project_assignment?user_email='
								+ email;
						$
								.ajax({
									method : 'GET',
									url : user_url,
									// crossDomain : true,
									dataType : 'json',
									success : function(approval_data,
											textStatus, jqXHR) {
										console.log(approval_data);
										//之后要改，暂时是写死的只拿第一个，应该把对应所有的都拿到
										project_code = approval_data[0].psp_element_number;
										console
												.log("----psp_element_number ----"
														+ project_code);
										approvel_url = 'http://127.0.0.1:8000/api/v1/timesheet?project_code='
												+ project_code;
										$
												.ajax({
													method : 'GET',
													url : approvel_url,
													// crossDomain : true,
													dataType : 'json',
													success : function(
															model_data) {

														console.log(model_data);
														 var oModel = new sap.ui.model.json.JSONModel(
																 model_data);

														sap.ui.getCore()
																.setModel(
																		oModel,
																		"table_projMgrHrApproval");
													},
													error : function(xhr,
															readyState) {
														console.log("Error: "
																+ readyState);
														sap.m.MessageToast
																.show("Connection failed! Please try again later.");
													}

												});

										console.log(data);
									},
									error : function(xhr, readyState) {
										console.log("Error: " + readyState);
										sap.m.MessageToast
												.show("Connection failed! Please try again later.");
									}

								});
					}
				/**
				 * Called when the View has been rendered (so its HTML is part
				 * of the document). Post-rendering manipulations of the HTML
				 * could be done here. This hook is the same one that SAPUI5
				 * controls get after being rendered.
				 * 
				 * @memberOf vicaraapp.ProjMgrHrApproval
				 */
				// onAfterRendering: function() {
				//
				// },
				/**
				 * Called when the Controller is destroyed. Use this one to free
				 * resources and finalize activities.
				 * 
				 * @memberOf vicaraapp.ProjMgrHrApproval
				 */
				// onExit: function() {
				//
				// }
				});
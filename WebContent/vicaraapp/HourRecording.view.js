sap.ui
		.jsview(
				"vicaraapp.HourRecording",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf vicaraapp.HourRecording
					 */
					getControllerName : function() {
						return "vicaraapp.HourRecording";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf vicaraapp.HourRecording
					 */
					createContent : function(oController) {

						var oEmployeeIDLabel = new sap.m.Label(
								"idHrRcdEmployeeIDLabel", {
									text : "employee ID",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oEmployeeIDInput = new sap.m.Input(
								"idHrRcdEmployeeIDInput",
								{
									placeholder : "Please enter your employee ID",
									valueStateText : "employee ID cannot be empty.",
									liveChange : function() {
										if (this.getValue() === "") {
											// if the field is empty after
											// change, it will go red
											this
													.setValueState(sap.ui.core.ValueState.Error);
										} else {
											// if the field is not empty after
											// change, the value state
											// (if any) is removed
											this
													.setValueState(sap.ui.core.ValueState.None);
										}
									}
								}).addStyleClass("userRegistrationInputsCss");

						var oNameLabel = new sap.m.Label("idHrRcdNameLabel", {
							text : "Name",
							required : true,
						}).addStyleClass("userRegistrationInputsCss");

						var oNameInput = new sap.m.Input(
								"idHrRcdNameInput",
								{
									placeholder : "Please enter your name",
									valueStateText : "Name cannot be empty.",
									liveChange : function() {
										if (this.getValue() === "") {
											// if the field is empty after
											// change, it will go red
											this
													.setValueState(sap.ui.core.ValueState.Error);
										} else {
											// if the field is not empty after
											// change, the value state
											// (if any) is removed
											this
													.setValueState(sap.ui.core.ValueState.None);
										}
									}
								}).addStyleClass("userRegistrationInputsCss");

						var oLocationLabel = new sap.m.Label("idLocationLabel",
								{
									text : "Location",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oLocationInput = new sap.m.Input(
								"idLocationInput",
								{
									placeholder : "Please enter your project location",
									valueStateText : "Location cannot be empty.",
									liveChange : function() {
										if (this.getValue() === "") {
											// if the field is empty after
											// change, it will go red
											this
													.setValueState(sap.ui.core.ValueState.Error);
										} else {
											// if the field is not empty after
											// change, the value state
											// (if any) is removed
											this
													.setValueState(sap.ui.core.ValueState.None);
										}
									}
								}).addStyleClass("userRegistrationInputsCss");

						// Project Code
						var oProjectCodeLabel = new sap.m.Label(
								"idProjectCodeLabel", {
									text : "Project Code",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oProjectCodeInput = new sap.m.Input(
								"idProjectCodeInput",
								{
									placeholder : "Please enter your project code",
									valueStateText : "Project code can be empty.",
									liveChange : function() {
										if (this.getValue() === "") {
											// if the field is empty after
											// change, it will go red
											this
													.setValueState(sap.ui.core.ValueState.Error);
										} else {
											// if the field is not empty after
											// change, the value state
											// (if any) is removed
											this
													.setValueState(sap.ui.core.ValueState.None);
										}
									}
								}).addStyleClass("userRegistrationInputsCss");

						// input project date
						var oProjectDateLabel = new sap.m.Label(
								"idProjectDateLabel", {
									text : "Date",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oProjectDatePicker = new sap.m.DatePicker(
								"idProjectDatePicker", {
									valueFormat : "yyyy-MM-dd",
								}).addStyleClass("userRegistrationInputsCss");

						// input start time
						var oProjectStartTimeLabel = new sap.m.Label(
								"idProjectStartTimeLabel", {
									text : "Start Time",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oProjectStartTimePicker = new sap.m.TimePicker(
								"idProjectStartTimePicker", {
									valueFormat : "HH:mm:ss",
									displayFormat : "HH:mm:ss",
								}).addStyleClass("userRegistrationInputsCss");

						// input end time
						var oProjectEndTimeLabel = new sap.m.Label(
								"idProjectEndTimeLabel", {
									text : "End Time",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oProjectEndTimePicker = new sap.m.TimePicker(
								"idProjectEndTimePicker", {
									valueFormat : "HH:mm:ss",
									displayFormat : "HH:mm:ss",
								}).addStyleClass("userRegistrationInputsCss");

						// input break time
						var oProjectBreakTimeLabel = new sap.m.Label(
								"idProjectBreakTimeLabel", {
									text : "Break Time",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oProjectBreakTimePicker = new sap.m.TimePicker(
								"idProjectBreakTimePicker", {
									valueFormat : "HH:mm:ss",
									displayFormat : "HH:mm:ss",
								}).addStyleClass("userRegistrationInputsCss");

						// input work time
						var oProjectWorkTimeLabel = new sap.m.Label(
								"idProjectWorkTimeLabel", {
									text : "Work Time",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oProjectWorkTimePicker = new sap.m.TimePicker(
								"idProjectWorkTimePicker", {
									valueFormat : "HH:mm:ss",
									displayFormat : "HH:mm:ss",
								}).addStyleClass("userRegistrationInputsCss");

						// input description
						var oProjectDescriptionLabel = new sap.m.Label(
								"idProjectDescriptionLabel", {
									text : "Description",
									required : true,
								}).addStyleClass("userRegistrationInputsCss");

						var oProjectDescriptionInput = new sap.m.TextArea(
								"idProjectDescriptionInput",
								{
									placeholder : "Please enter your description. Cannot exceed 255 characters",
									valueStateText : "Cannot be empty or exceed 255 characters.",
									maxLength : 255,
									growing : true,
									liveChange : function() {
										if (this.getValue() === "") {
											// if the field is empty after
											// change, it will go red
											this
													.setValueState(sap.ui.core.ValueState.Error);
										} else {
											// if the field is not empty after
											// change, the value state
											// (if any) is removed
											this
													.setValueState(sap.ui.core.ValueState.None);
										}
									}
								}).addStyleClass("userRegistrationInputsCss");
						// submit button
						var oButton = new sap.m.Button("idHrRcdButton", {
							text : "Submit",
							press : [ oController.hourRecording, oController ]
						}).addStyleClass("btnCss");

						// Add footer and copyright
						var oFooter = new sap.m.Bar(
								{
									design : sap.m.BarDesign.Footer,
									contentMiddle : [ new sap.m.Label(
											{
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
							title : "Hour Recording",
							headerContent : oLogoImage,
							footer : oFooter,
							content : [ oEmployeeIDLabel, oEmployeeIDInput,
									oNameLabel, oNameInput, oLocationLabel,
									oLocationInput, oProjectCodeLabel,
									oProjectCodeInput, oProjectDateLabel,
									oProjectDatePicker, oProjectStartTimeLabel,
									oProjectStartTimePicker, oProjectEndTimeLabel,
									oProjectEndTimePicker,oProjectBreakTimeLabel,
									oProjectBreakTimePicker,oProjectWorkTimeLabel,
									oProjectWorkTimePicker,oProjectDescriptionLabel,oProjectDescriptionInput,oButton ],
							showNavButton : true,
							navButtonPress : function(oEvt) {
								app.back();
							},
						});

						return oPage;

					}

				});
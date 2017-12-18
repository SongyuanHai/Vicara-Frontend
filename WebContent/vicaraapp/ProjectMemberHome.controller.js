sap.ui.controller("vicaraapp.ProjectMemberHome", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf vicaraapp.ProjectMemberHome
	 */
	// onInit : function() {
	// },
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf vicaraapp.ProjectMemberHome
	 */
	onBeforeRendering : function() {

		var oGreet = sap.ui.getCore().byId("idGreet_projectMember");
		oGreet.setText("Welcome Login "
				+ sap.ui.getCore().byId("idUserName_projectMember").getText())
				+ "!";

	},

	//The function of logout button. Go to login page and reload the page
	goToLoginPage : function(oEvt) {
		var oUserName = sap.ui.getCore().byId("idNameInput");
		oUserName.setValue();
		var oUserPwd = sap.ui.getCore().byId("idPasswordInput");
		oUserPwd.setValue();
		app.to("login1");
		location.reload();
	},
	
	goToHourReporting : function(oEvt) {
		app.to("projMgrHrReporting1");
	},
	
	goToHourRecording : function(oEvt) {
		app.to("hourRecording1");
	},

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf vicaraapp.ProjectMemberHome
 */
// onAfterRendering : function() {
//		
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf vicaraapp.ProjectMemberHome
 */
// onExit: function() {
//
// }
});
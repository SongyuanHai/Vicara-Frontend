sap.ui.controller("vicaraapp.AdminHome", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf vicaraapp.AdminHome
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf vicaraapp.AdminHome
*/
	onBeforeRendering: function() {
		var oGreet = sap.ui.getCore().byId("idGreet_admin");
		oGreet.setText("Welcome Login "
				+ sap.ui.getCore().byId("idUserName_admin").getText())
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
	
	// Go to AdminMaintainUser page
	gotoAdminMaintainUser : function(oEvt) {
		app.to("adminMaintainUser1");
	},
	
	// Go to AdminMaintainProjectMaster page
	gotoAdminMaintainProjectMaster : function(oEvt) {
		app.to("adminMaintainProjectMaster1");
	},
	
	// Go to AdminMaintainProjectAssignment page
	gotoAdminMaintainProjectAssignment : function(oEvt) {
		app.to("adminMaintainProjectAssignment1");
	},
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf vicaraapp.AdminHome
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf vicaraapp.AdminHome
*/
//	onExit: function() {
//
//	}

});
sap.ui.jsview("vicaraapp.AdminHome", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.AdminHome
	 */
	getControllerName : function() {
		return "vicaraapp.AdminHome";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.AdminHome
	 */
	createContent : function(oController) {

		// Create welcome logo
		var oUserName = new sap.m.Label("idUserName_admin");
		var oGreet = new sap.m.Label("idGreet_admin");

		// Create Tiles
		var oStandardTile1 = new sap.m.StandardTile("idAdminMaintainUser", {
			title : "Maintain/Edit User",
			info : "Admin",
			icon : "sap-icon://timesheet",
			press : [ oController.gotoAdminMaintainUser, oController ],
		});

		var oStandardTile2 = new sap.m.StandardTile(
				"idAdminMaintainProjectMaster", {
					title : "Maintain/Edit Project Master",
					info : "Admin",
					icon : "sap-icon://work-history",
					press : [ oController.gotoAdminMaintainProjectMaster, oController ],
				});

		var oStandardTile3 = new sap.m.StandardTile(
				"idAdminMaintainProjectAssignment", {
					title : "Maintain/Edit Project Assignment",
					info : "Admin",
					icon : "sap-icon://workflow-tasks"
				});

		// Create tileContainer and add tiles
		var oTileContainer = new sap.m.TileContainer("idAdminTileContainer", {
			tiles : [ oStandardTile1, oStandardTile2, oStandardTile3, ]
		});

		// Create logout button
		var oLogoutButton = new sap.m.Button({
			text : "Logout",
			icon : "sap-icon://log",
			press : [ oController.goToLoginPage, oController ]
		});

		// Create company logo image

		var oLogoImage = new sap.m.Image({
			src : "image/logo_Westernacher.jpg",
			height : "45px",
			width : "120px",
		});

		// Create page
		var oPage = new sap.m.Page({
			title : "Admin Home",
			headerContent : [ oLogoImage, oLogoutButton ],
			// showNavButton : true,
			// navButtonPress : [oController.goToLoginPage,oController],
			content : [ oGreet, oTileContainer ]
		}).addStyleClass("pageCss");

		return oPage;
	}

});
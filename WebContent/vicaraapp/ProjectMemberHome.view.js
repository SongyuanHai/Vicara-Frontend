sap.ui.jsview("vicaraapp.ProjectMemberHome", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.ProjectMemberHome
	 */
	getControllerName : function() {
		return "vicaraapp.ProjectMemberHome";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.ProjectMemberHome
	 */
	createContent : function(oController) {

		// Create welcome logo
		var oUserName = new sap.m.Label("idUserName_projectMember");
		var oGreet = new sap.m.Label("idGreet_projectMember");

		// Create Tiles
		var oStandardTile1 = new sap.m.StandardTile(
				"idProjectMemberHourRecording", {
					title : "Hour Recording",
					info : "Project Member",
					icon : "sap-icon://timesheet",
					press : [ oController.goToHourRecording, oController ],
				});

		var oStandardTile2 = new sap.m.StandardTile(
				"idProjectMemberHourReporting", {
					title : "Hour Reporting",
					info : "Project Member",
					icon : "sap-icon://work-history",
					press : [ oController.goToHourReporting, oController ],
				});

		var oStandardTile3 = new sap.m.StandardTile(
				"idProjectMemberWorkForcast", {
					title : "Work Forecast",
					info : "Project Member",
					icon : "sap-icon://workflow-tasks"
				});

		var oStandardTile4 = new sap.m.StandardTile("idProjectMemberProject", {
			title : "Projects",
			info : "Project Member",
			icon : "sap-icon://capital-projects"
		});

		// Create tileContainer and add tiles
		var oTileContainer = new sap.m.TileContainer(
				"idProjectMemberTileContainer", {
					tiles : [ oStandardTile1, oStandardTile2, oStandardTile3,
							oStandardTile4 ]
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
			title : "Project Member Home",
			headerContent : [ oLogoImage, oLogoutButton ],
			// showNavButton : true,
			// navButtonPress : [oController.goToLoginPage,oController],
			content : [ oGreet, oTileContainer ]
		}).addStyleClass("pageCss");

		return oPage;
	}

});
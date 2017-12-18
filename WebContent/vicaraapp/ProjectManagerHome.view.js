sap.ui.jsview("vicaraapp.ProjectManagerHome", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.ProjectManagerHome
	 */
	getControllerName : function() {
		return "vicaraapp.ProjectManagerHome";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.ProjectManagerHome
	 */

	createContent : function(oController) {
		var oUserName = new sap.m.Label("idUserName_projectManager");
		var oGreet = new sap.m.Label("idGreet_projectManager");

		var oStandardTile1 = new sap.m.StandardTile(
				"idProjectManagerHourRecording", {
					title : "Hour Recording",
					info : "Project Manager",
					icon : "sap-icon://timesheet",
					press : [ oController.goToHourRecording, oController ],
				});

		var oStandardTile2 = new sap.m.StandardTile(
				"idProjectManagerHourReporting", {
					title : "Hour Reporting",
					info : "Project Manager",
					icon : "sap-icon://work-history",
					press : [ oController.goToHourReporting, oController ],
				});

		var oStandardTile3 = new sap.m.StandardTile(
				"idProjectManagerWorkForcast", {
					title : "Work Forecast",
					info : "Project Manager",
					icon : "sap-icon://workflow-tasks"
				});

		var oStandardTile4 = new sap.m.StandardTile("idProjectManagerProject",
				{
					title : "Projects",
					info : "Project Manager",
					icon : "sap-icon://capital-projects"
				});

		var oStandardTile5 = new sap.m.StandardTile(
				"idProjectManagerHourApproval", {
					title : "Hour Approval",
					info : "Project Manager",
					icon : "sap-icon://approvals",
					press : [ oController.goToHourApproval, oController ],
				});

		var oTileContainer = new sap.m.TileContainer(
				"idProjectManagerTileContainer", {
					tiles : [ oStandardTile1, oStandardTile2, oStandardTile3,
							oStandardTile4, oStandardTile5 ]
				});

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

		var oPage = new sap.m.Page({
			title : "Project Manager Home",
			headerContent : [ oLogoImage, oLogoutButton ],
			// showNavButton : true,
			// navButtonPress : [oController.goToLoginPage,oController],
			content : [ oGreet, oTileContainer ]
		}).addStyleClass("pageCss");

		return oPage;

	}

});
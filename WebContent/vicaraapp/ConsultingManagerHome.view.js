sap.ui.jsview("vicaraapp.ConsultingManagerHome", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.ConsultingManagerHome
	 */
	getControllerName : function() {
		return "vicaraapp.ConsultingManagerHome";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.ConsultingManagerHome
	 */
	createContent : function(oController) {

		var oUserName = new sap.m.Label("idUserName_ConsutingManager");
		var oGreet = new sap.m.Label("idGreet_ConsutingManager");

		var oStandardTile1 = new sap.m.StandardTile(
				"idConsultingManagerFinancialPlanning", {
					title : "Financial Planning",
					info : "Consulting Manager",
					icon : "sap-icon://customer-financial-fact-sheet"
				});

		var oStandardTile2 = new sap.m.StandardTile(
				"idConsultingManagerUtilisationReporting", {
					title : "Utilisation Reporting",
					info : "Consulting Manager",
					icon : "sap-icon://manager-insight"
				});

		var oStandardTile3 = new sap.m.StandardTile(
				"idConsultingManagerInternalRate", {
					title : "Create Internal Rate Card ",
					info : "Consulting Manager",
					icon : "sap-icon://lead"
				});

		var oStandardTile4 = new sap.m.StandardTile(
				"idConsultingManagerExternalRate", {
					title : "Create External Rate Card ",
					info : "Consulting Manager",
					icon : "sap-icon://money-bills"
				});

		var oTileContainer = new sap.m.TileContainer(
				"idConsultingManagerTileContainer", {
					tiles : [ oStandardTile1, oStandardTile2, oStandardTile3,
							oStandardTile4 ]
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
			title : "Consulting Manager Home",
			headerContent : [ oLogoImage, oLogoutButton ],
			// showNavButton : true,
			// navButtonPress : [oController.goToLoginPage,oController],
			content : [ oGreet, oTileContainer ]
		}).addStyleClass("pageCss");

		return oPage;

	}

});
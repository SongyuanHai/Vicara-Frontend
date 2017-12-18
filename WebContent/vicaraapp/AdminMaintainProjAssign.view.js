sap.ui.jsview("vicaraapp.AdminMaintainProjAssign", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf vicaraapp.AdminMaintainProjAssign
	*/ 
	getControllerName : function() {
		return "vicaraapp.AdminMaintainProjAssign";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf vicaraapp.AdminMaintainProjAssign
	*/ 
	createContent : function(oController) {
		var oCol1 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "PSP Element"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectAssignment>psp_element_number}"
			})
		});

		var oCol2 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "User"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectAssignment>user_email}"
			})
		});
		var oCol3 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Role"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectAssignment>role}"
			})
		});


		var oTable = new sap.ui.table.Table({
			title : "Project Assignment Table",
			selectionMode : "None",
			visibleRowCount : 20,
			columns : [ oCol1, oCol2, oCol3, ]
		});

//		var oAddAssignmentButton = new sap.m.Button({
//			text : "Add Project",
//			icon : "sap-icon://add",
//			press : [ oController.gotoProjectMasterRegistration, oController ]
//		});

		var oRefreshButton = new sap.m.Button({
			text : "Refresh",
			icon : "sap-icon://refresh",
			press : [ oController.onAfterRendering, oController ]
		});

		oTable.bindRows("table_adminMaintainProjectAssignment>/");

		var oPage = new sap.m.Page({
			title : "Project Assignment Maintenance",
			showNavButton : true,
			navButtonPress : function(oEvt) {
				app.back();
			},
			headerContent : [ oRefreshButton ],
			content : [ oTable ]
		});

		return oPage;
	}

});
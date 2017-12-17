sap.ui.jsview("vicaraapp.AdminMaintainProjectMaster", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.AdminMaintainProjectMaster
	 */
	getControllerName : function() {
		return "vicaraapp.AdminMaintainProjectMaster";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.AdminMaintainProjectMaster
	 */
	createContent : function(oController) {
		var oCol1 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "PSP Element"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectMaster>psp_element}"
			})
		});

		var oCol2 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Project Name"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectMaster>project_name}"
			})
		});
		var oCol3 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Start Date"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectMaster>start_date}"
			})
		});

		var oCol4 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "End Date"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectMaster>end_date}"
			})
		});

		var oCol5 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Fixed Price"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainProjectMaster>fixed_price}"
			})
		});

		var oTable = new sap.ui.table.Table({
			title : "Project Master Table",
			selectionMode : "None",
			visibleRowCount : 20,
			columns : [ oCol1, oCol2, oCol3, oCol4, oCol5, ]
		});

		var oAddUserButton = new sap.m.Button({
			text : "Add Project",
			icon : "sap-icon://add",
			press : [ oController.gotoProjectMasterRegistration, oController ]
		});

		var oRefreshButton = new sap.m.Button({
			text : "Refresh",
			icon : "sap-icon://refresh",
			press : [ oController.onAfterRendering, oController ]
		});

		oTable.bindRows("table_adminMaintainProjectMaster>/");

		var oPage = new sap.m.Page({
			title : "Project Master Maintenance",
			showNavButton : true,
			navButtonPress : function(oEvt) {
				app.back();
			},
			headerContent : [ oAddUserButton, oRefreshButton ],
			content : [ oTable ]
		});

		return oPage;
	}

});
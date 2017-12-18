sap.ui.jsview("vicaraapp.ProjMgrHrApproval", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.ProjMgrHrApproval
	 */
	getControllerName : function() {
		return "vicaraapp.ProjMgrHrApproval";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.ProjMgrHrApproval
	 */
	createContent : function(oController) {
		var oCol1 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Name"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>name}"
			})
		});

		var oCol2 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "EmployeeID"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>employeeID}"
			})
		});
		var oCol3 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Location"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>location}"
			})
		});

		var oCol4 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Date"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>date}"
			})
		});

		var oCol5 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Start Time"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>start_time}"
			})
		});

		var oCol6 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "End Time"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>end_time}"
			})
		});

		var oCol7 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Break Hour"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>break_hour}"
			})
		});

		var oCol8 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Work Hour"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>work_hour}"
			})
		});

		var oCol9 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Project Code"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>project_code}"
			})
		});

		var oCol10 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Description"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>description}"
			})
		});

		var oCol11 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Status"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrApproval>approval_status}"
			})
		});

		var oTable = new sap.ui.table.Table({
			title : "Hour Approval Table",
			selectionMode : "MultiToggle",
			columns : [ oCol1, oCol2, oCol3, oCol4, oCol5, oCol6, oCol7, oCol8,
					oCol9, oCol10, oCol11 ]
		});

		oTable.bindRows("table_projMgrHrApproval>/");

		// var oRefreshButton = new sap.m.Button({
		// text : "Refresh",
		// icon : "sap-icon://refresh",
		// press : [ oController.onUserDataReceived, oController ]
		// });

		var oPage = new sap.m.Page({
			title : "Hour Approval Page",
			showNavButton : true,
			navButtonPress : function(oEvt) {
				app.back();
			},
			content : [ oTable ],
		// headerContent : [oRefreshButton,],
		});

		return oPage;
	}

});
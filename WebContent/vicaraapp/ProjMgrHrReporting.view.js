sap.ui.jsview("vicaraapp.ProjMgrHrReporting", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.ProjMgrHrReporting
	 */
	getControllerName : function() {
		return "vicaraapp.ProjMgrHrReporting";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.ProjMgrHrReporting
	 */
	createContent : function(oController) {
		// create a oList control
		// var oList = new sap.m.List({
		// headerText : "Hour Reporting List"
		// });

		// bind the oList items to the oData collection
		// oList.bindItems({
		// path : "table_projMgrHrRep>/",
		// template : new sap.m.StandardListItem({
		// title : "{table_projMgrHrRep>name}",
		// description : "{table_projMgrHrRep>name}"
		// }),
		//
		// });

		var oCol1 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Name"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>name}"
			})
		});

		var oCol2 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "EmployeeID"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>employeeID}"
			})
		});
		var oCol3 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Location"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>location}"
			})
		});

		var oCol4 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Date"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>date}"
			})
		});

		var oCol5 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Start Time"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>start_time}"
			})
		});

		var oCol6 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "End Time"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>end_time}"
			})
		});

		var oCol7 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Break Hour"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>break_hour}"
			})
		});

		var oCol8 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Work Hour"
			}),
			template : new sap.m.Text({
				text : "{table_projMgrHrRep>work_hour}"
			})
		});

		var oTable = new sap.ui.table.Table({
			title : "Hour Reporting Table",
			selectionMode: "None",
			columns : [ oCol1, oCol2, oCol3, oCol4, oCol5, oCol6, oCol7, oCol8
			]
		});

		oTable.bindRows("table_projMgrHrRep>/");

		var oPage = new sap.m.Page({
			title : "Project Manager Hour Reporting",
			showNavButton : true,
			navButtonPress : function(oEvt) {
				app.back();
			},
			content : [ oTable ]
		});

		return oPage;
	}

});
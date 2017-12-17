sap.ui.jsview("vicaraapp.AdminMaintainUser", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf vicaraapp.AdminMaintainUser
	 */
	getControllerName : function() {
		return "vicaraapp.AdminMaintainUser";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf vicaraapp.AdminMaintainUser
	 */
	createContent : function(oController) {
		var oCol1 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "First Name"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>first_name}"
			})
		});

		var oCol2 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Middle Name"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>middle_name}"
			})
		});
		var oCol3 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Last Name"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>last_name}"
			})
		});

		var oCol4 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "EmployeeID"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>employeeID}"
			})
		});

		var oCol5 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Level"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>level}"
			})
		});

		var oCol6 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Role"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>role}"
			})
		});

		var oCol7 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Email"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>email}"
			})
		});

		var oCol8 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Superuser"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>is_superuser}"
			})
		});

		var oCol9 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Activation"
			}),
			template : new sap.m.Text({
				text : "{table_adminMaintainUser>is_active}"
			})
		});

		var oTable = new sap.ui.table.Table({
			title : "User Table",
			selectionMode : "None",
			visibleRowCount : 20,
			columns : [ oCol1, oCol2, oCol3, oCol4, oCol5, oCol6, oCol7, oCol8,
					oCol9, ]
		});

		var oAddUserButton = new sap.m.Button({
			text : "Add User",
			icon : "sap-icon://add",
			press : [ oController.gotoUserRegistration, oController ]
		});
		
		var oRefreshButton = new sap.m.Button({
			text : "Refresh",
			icon : "sap-icon://refresh",
			press : [ oController.onAfterRendering, oController ]
		});
		
		oTable.bindRows("table_adminMaintainUser>/");

		var oPage = new sap.m.Page({
			title : "User Maintenance",
			showNavButton : true,
			navButtonPress : function(oEvt) {
				app.back();
			},
			headerContent : [oAddUserButton,oRefreshButton ],
			content : [ oTable ]
		});

		return oPage;
	}

});
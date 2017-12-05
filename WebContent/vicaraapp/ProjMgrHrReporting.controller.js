sap.ui.controller("vicaraapp.ProjMgrHrReporting", {

/**
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf vicaraapp.ProjMgrHrReporting
 */
	onInit: function() {
//		var sURL = "http://127.0.0.1:8000/hourReporting/";
//		//var sURL = "http://services.odata.org/V4/(S(3q5cdlo5xol5mevqq3hw1dgz))/TripPinServiceRW/";
//		var oModel = new sap.ui.model.json.JSONModel(sURL);
//		
//		sap.ui.getCore().setModel(oModel,"table_projMgrHrRep");
		



	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf vicaraapp.ProjMgrHrReporting
 */
// onBeforeRendering: function() {
//
// },

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf vicaraapp.ProjMgrHrReporting
 */
 onAfterRendering: function() {
	 $.ajax({
			method : 'GET',
			url : 'http://127.0.0.1:8000/api/v1/timesheet/',
			//crossDomain : true,
			dataType : 'json',
			success : function(data) {
				console.log(data);
				var oModel = new sap.ui.model.json.JSONModel(data);
				
				sap.ui.getCore().setModel(oModel,"table_projMgrHrRep");
			},
			error : function(xhr, readyState) {
				console.log("Error: " + readyState);
				sap.m.MessageToast
				.show("Connection failed! Please try again later.");
			}

		});
	 
 },

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf vicaraapp.ProjMgrHrReporting
 */
// onExit: function() {
//
// }

});
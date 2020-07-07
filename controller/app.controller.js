sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function (Controller, MessageToast, Filter, FilterOperator, ResourceModel, MessageBox, JSONModel, formatter) {
	"use strict";
	return Controller.extend("UI5Day2.controller.app", {
		formatter: formatter,
		onInit: function () {},
		handleSortCC: function () {
			var oList = this.byId("invList");
			var oBinding = oList.getBinding("items");
			var aSorter = [];
			aSorter.push(new sap.ui.model.Sorter("Bukrs", false, false));
			oBinding.sort(aSorter);
		},
		handleGroupCC: function () {
			var oList = this.byId("invList");
			var oBinding = oList.getBinding("items");
			var aSorter = [];
			aSorter.push(new sap.ui.model.Sorter("Bukrs", false, true));
			oBinding.sort(aSorter);
		},
		showDetails: function (oEvent) {
			debugger
		},
		onSearchINV: function () {
			debugger;
			//var oBundle = this.getModel("i18n").getResourceBundle();
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var msg = oBundle.getText("searchInvoice");
			sap.m.MessageBox.show(
				msg, {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						MessageToast.show('closed');
					}
				}
			);
		}
	});
});
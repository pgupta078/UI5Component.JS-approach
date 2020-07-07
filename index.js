sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name: "UI5Day2",
		settings: {
			id: "walkthrough"
		},
		async: true
	}).placeAt("content");

});
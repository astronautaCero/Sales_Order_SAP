/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/perceptio/training/sales_orders_info/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
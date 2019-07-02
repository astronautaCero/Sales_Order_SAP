/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/perceptio/training/sales_orders_info/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
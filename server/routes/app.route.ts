import { Express } from "express";
import { controller } from "./../controllers/product.controller";

export default class AppRouteConfig {
	constructor(app: Express) {
		const pattern=/Products\/\$count/
		app.route("/Products")
			.get(controller.products);
		app.route(pattern)
			.get(controller.products);
	}
}
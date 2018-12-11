import { Express } from "express";
import { controller } from "./../controllers/product.controller";

export default class AppRouteConfig {
	constructor(app: Express) {
		app.route("/Products")
			.get(controller.products);
		app.route("/Products/$count")
			.get(controller.products);
	}
}
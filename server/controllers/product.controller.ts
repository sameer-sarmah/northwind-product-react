import { Request, Response } from "express";
import { fetchData } from "./../utils/product.fetcher";

class ProductsController {
  public products(req: Request, res: Response): void {
    const originalUrl = req.originalUrl;
    const headers = req.headers;
    const cookies = req.cookies;
    fetchData({ headers, cookies, originalUrl, response: res });
  }
}

export const controller = new ProductsController();

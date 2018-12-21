import { Router } from 'express';
import GroceryController from "../controllers/groceryController";

const groceryRoutes = Router();
const baseUrl = '/api/groceries';
groceryRoutes.get(`${baseUrl}`, GroceryController.getGroceries);
groceryRoutes.post(`${baseUrl}`, GroceryController.addGrocery);
groceryRoutes.patch(`${baseUrl}/:id`, GroceryController.updateGrocery);
groceryRoutes.delete(`${baseUrl}/:id`, GroceryController.deleteGrocery);

export default groceryRoutes;

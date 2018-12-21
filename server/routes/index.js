import { Router } from 'express';
import groceryRoutes from "./groceryRoutes";

const router = Router();

const baseUrl = '/api/groceries';
router.use(`${baseUrl}`, groceryRoutes);

export default router;
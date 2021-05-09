import express, {Request, Response} from 'express';
import { calculate, fetchRecords } from '../controllers/controller';
const router = express.Router();

/* GET home page. */
router.get('/fetchRecords',fetchRecords);
router.post("/calculate", calculate)

export default router;

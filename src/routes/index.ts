import express, {Request, Response} from 'express';
import { calculate, fetchRecords } from '../controllers/controller';
const router = express.Router();

/* GET home page. */
router.get("/", (req:Request,res:Response)=> {
res.send(`<h1>Area calculator for  square,rectangle,triange,circle</h1>
<h5>Navigate to /calculate </h5>
<p>Format {shape: string,dimension: object || number}</p>

`)
})
router.get('/fetchRecords',fetchRecords);
router.post("/calculate", calculate)

export default router;

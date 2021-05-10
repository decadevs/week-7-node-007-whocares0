import express, {Request, Response} from 'express';
import { calculate, fetchRecords } from '../controllers/controller';
const router = express.Router();

/* GET home page. */
router.get("/", (req:Request,res:Response)=> {
res.send(`<h1>let us calculate the area of the following shapes: square,rectangle,triange,circle</h1>\n
in the format of {shape: takes a string,dimension: an object for rectangle and triangle or a number for square and circle}
`)
})
router.get('/fetchRecords',fetchRecords);
router.post("/calculate", calculate)

export default router;

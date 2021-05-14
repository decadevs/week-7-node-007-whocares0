"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("../controllers/controller");
var router = express_1.default.Router();
/* GET home page. */
router.get("/", function (req, res) {
    res.send("<h1>Area calculator for  square,rectangle,triange,circle</h1>\n<h5>Navigate to /calculate </h5>\n<p>Format {shape: string,dimension: object || number}</p>\n\n");
});
router.get('/fetchRecords', controller_1.fetchRecords);
router.post("/calculate", controller_1.calculate);
exports.default = router;

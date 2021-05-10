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
    res.send("<h1>let us calculate the area of the following shapes: square,rectangle,triange,circle</h1>\n\nin the format of {shape: takes a string,dimension: an object for rectangle and triangle or a number for square and circle}\n");
});
router.get('/fetchRecords', controller_1.fetchRecords);
router.post("/calculate", controller_1.calculate);
exports.default = router;

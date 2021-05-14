"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = exports.fetchRecords = void 0;
var models_1 = require("../models/models");
var joiValidation_1 = require("../joiValidation");
function fetchRecords(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var allRecord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.getAll()];
                case 1:
                    allRecord = _a.sent();
                    if (!allRecord) {
                        return [2 /*return*/, res.status(404).json({ error: "no record found" })];
                    }
                    res.status(200).json(allRecord);
                    return [2 /*return*/];
            }
        });
    });
}
exports.fetchRecords = fetchRecords;
function calculate(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, shape, dimension, Area, result, squareError, rectangleError, triangleError, semiP, circleError, newResult;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, shape = _a.shape, dimension = _a.dimension;
                    switch (shape) {
                        case 'square':
                            squareError = joiValidation_1.squareValidation(req.body).error;
                            if (squareError) {
                                return [2 /*return*/, res.status(400).json({ error: squareError.details[0].message })];
                            }
                            Area = Math.pow(dimension, 2);
                            result = {
                                shape: shape,
                                dimension: dimension,
                                Area: Area
                            };
                            break;
                        case 'rectangle':
                            rectangleError = joiValidation_1.rectangleValidation(req.body).error;
                            if (rectangleError) {
                                return [2 /*return*/, res.status(400).json({ error: rectangleError.details[0].message })];
                            }
                            Area = dimension.a * dimension.b;
                            result = {
                                shape: shape,
                                dimension: dimension,
                                Area: Area
                            };
                            break;
                        case 'triangle':
                            triangleError = joiValidation_1.triangleValidation(req.body).error;
                            if (triangleError) {
                                return [2 /*return*/, res.status(400).json({ error: triangleError.details[0].message })];
                            }
                            semiP = (dimension.a + dimension.b + dimension.c) / 2;
                            Area = Number(Math.sqrt(semiP * (semiP - dimension.a) * (semiP - dimension.b) * (semiP - dimension.c)).toFixed(2));
                            result = {
                                shape: shape,
                                dimension: dimension,
                                Area: Area
                            };
                            break;
                        case 'circle':
                            circleError = joiValidation_1.circleValidation(req.body).error;
                            if (circleError) {
                                return [2 /*return*/, res.status(400).json({ error: circleError.details[0].message })];
                            }
                            Area = Number((Math.PI * Math.pow(dimension, 2)).toFixed(2));
                            result = {
                                shape: shape,
                                dimension: dimension,
                                Area: Area
                            };
                            break;
                        default:
                            return [2 /*return*/, res.status(404).json({ message: "Only shape from square, rectangle,triangle and circle is allowed" })];
                    }
                    return [4 /*yield*/, models_1.create(result)];
                case 1:
                    newResult = _b.sent();
                    res.status(201).json(newResult);
                    return [2 /*return*/];
            }
        });
    });
}
exports.calculate = calculate;

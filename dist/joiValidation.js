"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleValidation = exports.triangleValidation = exports.rectangleValidation = exports.squareValidation = void 0;
var joi_1 = __importDefault(require("joi"));
var squareValidation = function (data) {
    var schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.number().required()
    });
    return schema.validate(data);
};
exports.squareValidation = squareValidation;
var rectangleValidation = function (data) {
    var schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.object().min(2).max(2).required()
    });
    return schema.validate(data);
};
exports.rectangleValidation = rectangleValidation;
var triangleValidation = function (data) {
    var schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.object().min(3).max(3).required()
    });
    return schema.validate(data);
};
exports.triangleValidation = triangleValidation;
var circleValidation = function (data) {
    var schema = joi_1.default.object({
        shape: joi_1.default.string().required(),
        dimension: joi_1.default.number().required()
    });
    return schema.validate(data);
};
exports.circleValidation = circleValidation;

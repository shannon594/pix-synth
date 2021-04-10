"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default(); // create express app
app.use(express_1.default.static("./app/dist"));
// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});
//# sourceMappingURL=main.js.map
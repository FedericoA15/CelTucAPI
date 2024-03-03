"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const _index_1 = __importDefault(require("./routes/_index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3004 || process.env.PORT;
app.get("/status", (_, res) => {
    res.status(200).send({ "status": "ok" });
});
app.use("/api", _index_1.default);
(0, connection_1.run)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
//# sourceMappingURL=index.js.map
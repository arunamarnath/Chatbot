"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userSignup = exports.getAllUsers = void 0;
const User_js_1 = __importDefault(require("../models/User.js"));
const bcrypt_1 = require("bcrypt");
const getAllUsers = async (req, res, next) => {
    // get all users
    try {
        const users = await User_js_1.default.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
exports.getAllUsers = getAllUsers;
const userSignup = async (req, res, next) => {
    //user signup
    try {
        const { name, email, password } = req.body;
        const existingUser = await User_js_1.default.findOne({ email });
        if (existingUser)
            return res.status(401).send("User already registered ");
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = new User_js_1.default({ name, email, password: hashedPassword });
        await user.save();
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
exports.userSignup = userSignup;
const userLogin = async (req, res, next) => {
    //user login
    try {
        const { email, password } = req.body;
        const user = await User_js_1.default.findOne({ email });
        if (!user) {
            return res.status(401).send("User not registered");
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
exports.userLogin = userLogin;
//# sourceMappingURL=user-controller.js.map
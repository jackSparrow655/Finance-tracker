import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.mjs";
import cors from "cors";
const app = express();
const PORT = 5000;

connectDB();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: [
            "https://finance-edited-frontend.onrender.com",
            'http://localhost:3000',
        ],
        // origin: '*',
        methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);
// app.use(cors());
app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Credential", "true");
    res.send("Api is running well baby-arijit");
});

import userRoutes from "./routes/userRoutes.mjs";
import txnRoutes from "./routes/txnRoutes.mjs";
import checkRoutes from "./routes/checkRoutes.mjs";
app.use("/user", userRoutes);
app.use("/txns", txnRoutes);
app.use("/check", checkRoutes);

// app.get('/logout', (req, res) => {
//   res.redirect('/auth');
//   res.clearCookie('jwt');
// });

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

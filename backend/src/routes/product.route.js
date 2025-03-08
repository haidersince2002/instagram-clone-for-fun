import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(authMiddleware, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "tv",
      price: 20000,
    },
  ]);
});
export default router;

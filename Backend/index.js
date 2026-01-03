require("dotenv").config();
const express = require("express");
const { default: mongoose, sanitizeFilter } = require("mongoose");
const app = express();
const cors = require("cors");
const { urlencoded } = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5173",
  "https://zerodhad.onrender.com",
  "https://zerodhaf.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const { authMiddleware } = require("./middlewares/authMiddwares");
const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL;
const { PositionsModel } = require("./models/positionsModels");
const { HoldingModel } = require("./models/holdingModels");
const { OrderModel } = require("./models/orderModels");
const { UserModel } = require("./models/userModels");

/* app.get("/addHoldings", authMiddleware, async (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "SBIN",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "SGBMAY29",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];

  for (let item of tempHoldings) {
    let newHolding = new HoldingModel({
      userId: req.user.id,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
    });

    await newHolding.save();
  }

  res.send("Done!");
}); */

app.get("/allHoldings", authMiddleware, async (req, res) => {
  try {
    let holdingData = await HoldingModel.find({});
    res.json(holdingData);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to load holdings",
    });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let positionaData = await PositionsModel.find({});
    res.json(positionaData);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to load positions",
    });
  }
});

app.get("/allOrders", authMiddleware, async (req, res) => {
  try {
    let ordersData = await OrderModel.find({ userId: req.user.id });
    res.json(ordersData);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to load orders",
    });
  }
});

app.post("/newOrder", authMiddleware, (req, res) => {
  try {
    let newOrder = new OrderModel({
      userId: req.user.id,
      name: req.body.name,
      totalPrice: req.body.totalPrice,
      pricePerUnit: req.body.pricePerUnit,
      qty: req.body.qty,
      mode: req.body.mode,
    });
    newOrder.save();
    res
      .status(200)
      .json({ success: true, message: "New Order Placed Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to place order",
    });
  }
});

app.post("/newHoldings", authMiddleware, async (req, res) => {
  try {
    const { name, qty, avg, price } = req.body;
    const userId = req.user.id;
    let holdingIsExist = await HoldingModel.findOne({
      name: name,
    });
    const buyQty = Number(qty);
    const buyPrice = Number(avg);
    const marketPrice = Number(price);
    if (holdingIsExist) {
      const totalQty = Number(holdingIsExist.qty) + buyQty;
      const totalCost =
        holdingIsExist.avg * Number(holdingIsExist.qty) + buyPrice * buyQty;

      const invested = holdingIsExist.avg * holdingIsExist.qty;

      const currentValue = holdingIsExist.price * holdingIsExist.qty;

      holdingIsExist.qty = totalQty;
      holdingIsExist.avg = totalCost / totalQty;
      holdingIsExist.price = marketPrice;
      holdingIsExist.isLoss = currentValue < invested;
      await holdingIsExist.save();
    } else {
      const invested = buyPrice * buyQty;
      const currentValue = marketPrice * buyQty;
      const newHolding = new HoldingModel({
        userId,
        name,
        qty: buyQty,
        avg: buyPrice,
        price: marketPrice,
        isLoss: currentValue < invested,
      });
      await newHolding.save();
    }
    res.status(200).json({
      success: true,
      message: "Holding added successfully",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update holding" });
  }
});

app.post("/sell", authMiddleware, async (req, res) => {
  try {
    const { name, totalPrice, pricePerUnit, qty } = req.body;
    const id = req.user.id;
    const sellQty = Number(qty);
    const holding = await HoldingModel.findOne({
      name,
    });
    if (!holding || holding.qty < sellQty || sellQty <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "No enough quantity to sell" });
    }

    const updatedQty = holding.qty - sellQty;

    if (updatedQty === 0) {
      await HoldingModel.findByIdAndDelete(holding._id);
    } else {
      holding.qty = updatedQty;
      await holding.save();
    }

    const record = new OrderModel({
      userId: id,
      name: name,
      totalPrice: totalPrice,
      pricePerUnit: pricePerUnit,
      qty: sellQty,
      mode: "SELL",
    });

    await record.save();

    res
      .status(200)
      .json({ success: true, message: "Given stock sell successfully" });
  } catch (e) {
    res.status(404).json({ success: true, message: "Something went wrong" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let user = await UserModel.findOne({ email: email });
    if (user) return res.status(409).send("User already exists");

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name: name,
      email: email,
      password: hashedPass,
    });

    const token = jwt.sign(
      { email: newUser.email, userId: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
    });
    return res
      .status(200)
      .json({ success: true, message: "Welcome To Zerodha Investment World" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    let { email, password } = req.body;

    let isExistUser = await UserModel.findOne({ email });
    if (!isExistUser)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    let result = await bcrypt.compare(password, isExistUser.password);

    if (!result) {
      return res.status(401).json({
        success: false,
        message: "Something Went Wrong",
      });
    }

    let token = jwt.sign(
      { email: isExistUser.email, userId: isExistUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    let check = res.cookie("token", token, {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({
      success: true,
      message: "Welcome Back",
    });
  } catch (e) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

app.get("/signout", (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
    });
    return res.status(200).json({ message: "Bye Bye" });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

app.get("/authuser", authMiddleware, async (req, res) => {
  try {
    let token = req.cookies.token;
    if (!token) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const findUser = await UserModel.findById(decoded.userId).select(
      "-password"
    );

    res.json({ success: true, findUser });
  } catch (err) {
    res.status(401).json({ success: false, message: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log("server started");
  mongoose.connect(url);
  console.log("database connect");
});

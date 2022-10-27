const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  rateLimit = require("express-rate-limit"),
  router = require("./routers"),
  errorController = require("./helpers/errorController"),
  app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  handler: function (req, res) {
    return res.status(429).json({
      code: 429,
      name: "Too Many Requests",
      error:
        "You sent too many requests. Please wait a while and then try again",
    });
  },
});

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use("/", router);
app.use(errorController);
module.exports = app;

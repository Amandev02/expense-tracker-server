const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");

const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/incomeRoute");
const expenseRoute = require("./routes/expenses/expenseRoute");


const app = express();
//env
dotenv.config();

//dbConnect
dbConnect();

//middlewares
app.use(express.json());

app.get("/", (req, res) =>{  
  res.json({ msg: "Welcome Expenses tracker API" });
});
                          

//user routes
app.use("/api/users", userRoute);

//income routes
app.use("/api/income", incomeRoute);

//expense routes
app.use("/api/expenses", expenseRoute);

//error
app.use(notFound);
app.use(errorHandler);

module.exports = app;  

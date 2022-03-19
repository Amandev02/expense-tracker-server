const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2"); 



//schema
const  expenseSchema = mongoose.Schema({
 title: {
    required: [true, "Title is required"],
   type: String,
 },
 description: {
    required: [true, "Description is required"],
   type: String,
 },
 type: {
   
   type: String,
   default: "expense"
 },
 amount: {
    required: [true, "Amount is required"],
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, //MUST BE MONGODB ID
    ref: "User",
    required: [true, "User ID is required"],
  },
 
},
{
   timestamp :true,
}
);

//pagination
expenseSchema.plugin(mongoosePaginate);

const Expense = mongoose.model("Expenses'", expenseSchema); 

module.exports = Expense; 


 
const mongoose = require("mongoose"); 

//Pd2biO8lXliu9b0G
//mongodb+srv://admin:<password>@expenses.lvagn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
        console.log(`DB connected Successfully`);
      } catch (error) {
         console.log(`Error ${error.message}`);
      }

};

module.exports = dbConnect; 
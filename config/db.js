const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await  mongoose.connect("mongodb://localhost:27017/AcademiChain_clgg", 
            { useNewUrlParser: true, useUnifiedTopology: true }
         )
        console.log("Mongodb connection successful");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        
    }

  
};

module.exports = connectDB;



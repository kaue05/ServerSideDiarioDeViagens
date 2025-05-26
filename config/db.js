const mongoose = require("mongoose");

const  connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Viagens2')
        console.log("MongoDB conectado")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;
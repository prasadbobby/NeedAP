const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bobby:bobby@cluster0.nvavp.mongodb.net/bobby?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() =>{
    console.log(`Connected to the MongoDB`);
}).catch((e) =>{
    console.log(`Not Connected to the MongoDB`);
})
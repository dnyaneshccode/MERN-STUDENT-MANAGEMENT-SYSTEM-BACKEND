const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MYEMPLOYEE", {
    useFindAndModify:true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 

}).then(() => {
    console.log("Connection Successful");
}).catch(err => {
    console.log(err);
})
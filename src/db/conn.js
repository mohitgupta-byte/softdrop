const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://appformeruser:appformer@cluster0.xmgkg.mongodb.net/appformers', {
    useNewUrlParser: true ,
     useUnifiedTopology: true 
  })
  .then( () => {
    console.log("connection success");
  })
  .catch( (error) => {
    console.log(error);
  });

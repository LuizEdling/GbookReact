const mongoose = require('mongoose');

async function connectDatabase(){
  await mongoose.connect(
      'mongodb+srv://danton:eZXxHw5zLvAfuHH6@cluster0.ofpao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
}

module.exports = connectDatabase;
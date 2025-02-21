import mongoose, { connect, mongo } from "mongoose";

mongoose.connect('mongodb://localhost: 27017/media-app');

const db = mongoose.connection;

db.on("erro", console.error.bind(console,'connection error: '));

db.once(
    'open',function(){
        console.log('Database conected successfully!');
    }
);

export default db;
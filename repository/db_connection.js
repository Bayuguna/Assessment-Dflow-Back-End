import mongoose from "mongoose";

const db = (db_connection) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(db_connection, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log("DATABASE READY"));
}

export default db;
import express from 'express';
import cors from 'cors';
import { connect, model } from 'mongoose';
import requireDir from  'require-dir';

//iniciando o App
const server = async() => {
  const app = express();
  app.use(json());
  app.use(cors());


//conectadno no BD
try {
  await connect('mongodb://thiego:node123456@storage-shard-00-00-zr8pm.mongodb.net:27017,storage-shard-00-01-zr8pm.mongodb.net:27017,storage-shard-00-02-zr8pm.mongodb.net:27017/sarc?ssl=true&replicaSet=Storage-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
} catch (err) {
  console.log('Error ao conectar',err)
}

requireDir ('../models');

const Dweller = model('Dweller');
const Room = model('Room');
const Debit = model('Debit')
const DebitDweller = model('DebitDweller');
const Message = model('Message');

//rotas
app.use("/api", require("../routes"));
app.get("/", (req,res) => {
  res.send("Funcionanddo");
});
app.listen(3000);

}

server();
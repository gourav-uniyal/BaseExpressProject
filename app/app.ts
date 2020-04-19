import express, { Application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import {MONGO_URL} from './utils/constants'
import {TestController} from './modules/test/test.controller'

class App {
// Create a new express application instance
  public app: Application;
  public testController: TestController;

  constructor(){
    this.app = express();
    this.setConfig();
    this.setMongoConfig();

    this.testController = new TestController(this.app);
  }

  private setConfig(){
    this.app.use(bodyParser.json({limit: '50mb'}));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true}));
    this.app.use(cors({credentials: true, origin: true}));
  }

  private setMongoConfig(){
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }).then(() => {
      return console.log(`Successfully connected to Database`);
    }).catch(error => {
      console.log("Error connecting to database: ", error);
      return process.exit(1);
    });
  }  

}
export default new App().app;
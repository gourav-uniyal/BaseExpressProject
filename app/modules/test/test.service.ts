import { Response, Request } from 'express';
import { Mongoose, MongooseDocument } from 'mongoose';

export class TestService {

    public welcomeMessage(req: Request, res: Response){
        return res.status(200).send("Welcome to RestApi by Ron-Okami");
    }

}

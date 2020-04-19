import {Response, Request, NextFunction} from 'express';

export class TestValidation{
    
    public createTestValidation(req: Request, res: Response, next: NextFunction){
        next();
    }
}
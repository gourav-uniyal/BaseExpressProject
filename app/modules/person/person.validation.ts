import { Response, Request, NextFunction } from 'express';

export class PersonValidation {

    public createPerson(req: Request, res: Response, next: NextFunction) {
        if (!req.body.name)
            return res.status(406).send({ status: 'Failed', message: 'Name cannot be empty' });
        if (!req.body.address)
            return res.status(406).send({ status: 'Failed', message: 'Address cannot be empty' });
        if (!req.body.age)
            return res.status(406).send({ status: 'Failed', message: 'Age cannot be empty' });

        next();
    }
}
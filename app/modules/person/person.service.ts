import { Response, Request } from 'express';
import { promiseHandler } from '../../_helpers/promise.handler';
import { Person } from './person.model';

export class PersonService {

    welcomeMessage(req: Request, res: Response) {
        return res.status(200).send({ status: "Success", data: 'Hello Dude' });
    }

    async createPerson(req: Request, res: Response) {
        const newPerson = new Person({
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        });
        let [result, resultError] = await promiseHandler(newPerson.save());

        if (resultError)
            return res.status(500).send({
                status: 'Failed',
                error: resultError.message,
                message: 'Creating New Person Failed'
            });

        return res.status(200).send({ status: 'Success', data: result, message: 'Person Created' });
    }

    async getAllPerson(req: Request, res: Response) {
        let [result, resultError] = await promiseHandler(Person.find());
        if (resultError)
            return res.status(500).send({
                status: 'Failed',
                error: resultError.message,
                message: 'Creating New Person Failed'
            });
        return res.status(200).send({ status: 'Success', data: result, message: 'Person List Fetched' });
    }

    async getPersonById(req: Request, res: Response) {
        let [result, resultError] = await promiseHandler(Person.findById(req.params.id));
        if (resultError)
            return res.status(500).send({
                status: 'Failed',
                error: resultError.message,
                message: 'Creating New Person Failed'
            });
        return res.status(200).send({ status: 'Success', data: result, message: 'Person Fetched' });
    }

}

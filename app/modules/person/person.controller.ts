import { Application } from 'express';
import { PersonService } from './person.service';
import { PersonValidation } from './person.validation';

export class PersonController {
    private personService: PersonService;
    private personValidation: PersonValidation;

    constructor(private app: Application) {
        this.personService = new PersonService();
        this.personValidation = new PersonValidation();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.personService.welcomeMessage);
        this.app.route('/person').post(this.personValidation.createPerson, this.personService.createPerson);
        this.app.route('/person').get(this.personService.getAllPerson);
        this.app.route('/person/:id').get(this.personService.getPersonById);
    }

}
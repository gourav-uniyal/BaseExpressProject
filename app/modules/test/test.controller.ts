import { Application } from 'express';
import { TestService } from './test.service';
import { TestValidation } from './test.validation';

export class TestController {
    private testService: TestService;
    private testvalidation: TestValidation;

    constructor(private app: Application) {
        this.testService = new TestService();
        this.testvalidation = new TestValidation();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.testvalidation.createTestValidation, this.testService.welcomeMessage);
      
    }

}
import { Callback, Context } from "aws-lambda";
import HelloWorldController from "../controller/hello.world.controller"

export default class HelloWorldHandler {
    
    private controller: HelloWorldController;

    constructor(){
        this.controller = new HelloWorldController();
    }

    public async execute(event: any, context: Context, callback: Callback){
        const result = await this.controller.sayHelloWorld(event); 
        callback(null,result);

    }

}

export const handler = new HelloWorldHandler();
export const execute = handler.execute.bind(handler);

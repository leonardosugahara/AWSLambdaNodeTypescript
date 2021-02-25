import { execute } from "../index";
import { Context } from "aws-lambda";

test('execute handler hello world', async () => {
    
    function callback(err: any, success: any){
        expect(success).toBe('Hello World!');
    };
    const event = {};
    const context = {} as Context;

    
    execute(event, context, callback);
})
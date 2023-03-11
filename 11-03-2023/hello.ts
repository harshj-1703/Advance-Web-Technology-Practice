// let greetings:string = "Welcome"; //if value is not said by default
// let greetings = "Welcome";
let greetings:number;      //by default if num not written then any
greetings = 123;
greetings = 456;
// greetings = "hi";
console.log(greetings);
let name:string;
function functionTest(param:boolean):string {
    // return "";
    if(param==true)
    return "";
    else
    return "false";
}

//if we put string type in function then for api we will not be use extra condition to check bool or string etc..
let ret = functionTest(true);     

//export is required for ts
export{}
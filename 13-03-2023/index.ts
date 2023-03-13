let user:object = {"name":"harsh","rollno":"24",isPaid:true};
console.log(user);

function getFirstThree(x:number[] | string)
{
    return x.slice(0,3);
}

let firstThree = getFirstThree(user['name']);
console.log(firstThree);

//Type Aliases
type Point = {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//export is required for ts
export{}
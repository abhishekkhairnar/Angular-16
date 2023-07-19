var count = 35;
count = 'a';


// type assertions

let message ;
message = "abhishek";
let endswithk = (<string>message).endsWith('k');
// alternative way
let alt = (message as string).endsWith('k');

// arrow functions in typescript
let fun = (message) =>{
    console.log(message);
}

let key:boolean; // this is how we give datatype in typescript
key = true;

// interfaces

interface Point{
    x: number,
    y: number
}
let drawPoint= (point:Point) =>
{
    //...
}
drawPoint({
    x:1,
    y:2
})


// classes

class Point{
    x:number;
    y:number;
    draw()
    {
        //...
    }
    getDistance(another:Point)
    {
        //...
    }
}
let arr = [1,2,3];

arr.__proto__.sayHello = () => {
    console.log("hello! i am arr");
}

arr.__proto__.push=(n)=>{
    console.log("pushing no ",n);
}
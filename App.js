{/* 
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
 */}

 //ReactElement is an object --> html (browser understands)

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
        ]),
        React.createElement(
            "div",
            {id:"child"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
            ]),   
);
console.log(parent);



// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React!");
// console.log(heading)//heading is an object, it's ot h1 tag    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
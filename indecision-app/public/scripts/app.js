// app.js (indecision-app/public/scripts/app.js)

console.log("app.js is running.");

// JSX: JavaScript XML

// var template = <p>This is JSX from app.js.</p>;
var template = React.createElement(
    "h1",
    { id: "template-id" },
    "Testing JSX display."
  );
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
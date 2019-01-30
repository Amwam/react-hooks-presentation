"use strict";
exports.__esModule = true;
var React = require("react");
function NewCode() {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    function updateCount() {
        setCount(count + 1);
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: updateCount }, "Click me"),
        React.createElement("h1", null,
            React.createElement("br", null),
            " ",
            count)));
}
exports.NewCode = NewCode;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
function identity(arg) {
    return arg;
}
console.log(identity(1));
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            count: 1
        };
        return _this;
    }
    Test.prototype.render = function () {
        return (<div>Hello world</div>);
    };
    Test.prototype.componentDidMount = function () {
        // this.state.count = 2 会提示错误
    };
    return Test;
}(React.PureComponent));
exports["default"] = Test;

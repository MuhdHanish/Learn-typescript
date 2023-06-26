"use strict";
var _a, _b;
function fetch(url) {
    console.log(url);
    return {
        data: null,
        error: null
    };
}
let username = fetch('url');
(_a = username.data) === null || _a === void 0 ? void 0 : _a.username;
let product = fetch('url');
(_b = product.data) === null || _b === void 0 ? void 0 : _b.title;
//# sourceMappingURL=index.js.map
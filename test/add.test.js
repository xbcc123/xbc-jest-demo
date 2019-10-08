
// var add = require('./add.js');

import add from "../src/add";

// 新建一个测试套件 
describe('加法函数的测试', function () {

    // 新建一个测试用例
    it('1 加 1 应该等于 2', function () {

        // 新建一个断言
        expect(add(1, 1)).toBe(2);

    });

    // // 新建一个测试用例
    it('1 加 2 应该等于 3', function () {

        // 新建一个断言
        expect(add(1, 2)).toBe(3);

    });

});

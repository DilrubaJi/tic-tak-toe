const {
    testcase,
} = require("./tic-tak-toe");


describe("testcase", () => {
    test("test the test", () => {
        expect(testcase(1)).toBe(11);
    });
});
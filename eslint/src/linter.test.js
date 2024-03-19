const linter = require("./linter");

test("linter returns text", () => {
  expect(linter("code")).toBe([]);
});

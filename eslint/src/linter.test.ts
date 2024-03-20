import { expect, test } from "@jest/globals";
import { linter } from "./linter";

test("linter returns text", () => {
  expect(linter("code")).toStrictEqual([]);
});

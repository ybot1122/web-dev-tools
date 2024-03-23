import fs from "fs";
import path from "path";

import { expect, test } from "@jest/globals";
import { linter } from "./linter";

test("no const reassignment", () => {
  expect(linter("const p = 1; p = 2")).toStrictEqual([
    "const p was reassigned",
  ]);
});

test.only("no const reassignment", () => {
  let js = fs.readFileSync(path.resolve(__dirname, "example.js"), "utf8");
  expect(linter(js)).toStrictEqual(["const a was reassigned"]);
});

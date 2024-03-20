import acorn from "acorn";

/**
 *
 * @param {string} text - code in raw text format
 * @returns {string[]} list of linter errors found
 */

function linter(text) {
  console.log(acorn.parse("const p = 1; p = 2", { ecmaVersion: 2020 }));
  return [];
}

export { linter };

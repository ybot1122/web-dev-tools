import acorn, { Node } from "acorn";

/**
 *
 * @param {string} text - code in raw text format
 * @returns {string[]} list of linter errors found
 */

function linter(text) {
  const ast = acorn.parse("const p = 1; p = 2", { ecmaVersion: 2020 });

  const constDeclarations = new Set<string>();

  const result = [];

  const next = [];
  for (const n in ast.body) {
    next.push(ast.body[n]);
  }

  let current = next.shift();

  while (current) {
    console.log(current);
    switch (current.type) {
      case "VariableDeclaration":
        if (current.kind === "const") {
          constDeclarations.add(current.declarations[0].id.name);
        }
        break;
      case "ExpressionStatement":
        if (
          current.expression.type === "AssignmentExpression" &&
          current.expression.operator === "="
        ) {
          if (constDeclarations.has(current.expression.left.name)) {
            result.push(`const ${current.expression.left.name} was reassigned`);
          }
        }

        break;
      case "VariableDeclarator":
        break;
      default:
        break;
    }
    current = next.shift();
  }

  return result;
}

export { linter };

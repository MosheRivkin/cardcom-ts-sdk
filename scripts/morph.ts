import { Project, SyntaxKind, VariableDeclaration, ParameterDeclaration, PropertyDeclaration } from "ts-morph";

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

const sourceFiles = project.getSourceFiles(["src/**/*.ts"]);

for (const sourceFile of sourceFiles) {
    console.log(`Processing file: ${sourceFile.getBaseName()}`);
    // --- Functions, Methods, Arrow Functions ---
    const functions = sourceFile.getFunctions();
    const arrowFunctions = sourceFile.getDescendantsOfKind(SyntaxKind.ArrowFunction);
    const functionExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.FunctionExpression);
    const methods = sourceFile.getDescendantsOfKind(SyntaxKind.MethodDeclaration);

    const allFuncs = [...functions, ...arrowFunctions, ...functionExpressions, ...methods];
    for (const fn of allFuncs) {
        if (!fn.getReturnTypeNode()) {
            const returnType = fn.getReturnType().getText(fn);
            fn.setReturnType(returnType);
        }
    }

    // --- Parameters ---
    const parameters = sourceFile.getDescendantsOfKind(SyntaxKind.Parameter);
    for (const param of parameters) {
        if (!(param as ParameterDeclaration).getTypeNode()) {
            const typeText = (param as ParameterDeclaration).getType().getText(param);
            if (typeText !== "any") {
                (param as ParameterDeclaration).setType(typeText);
            }
        }
    }

    // --- Variables ---
    const variables = sourceFile.getDescendantsOfKind(SyntaxKind.VariableDeclaration);
    for (const variable of variables) {
        if (!(variable as VariableDeclaration).getTypeNode()) {
            const typeText = (variable as VariableDeclaration).getType().getText(variable);
            if (typeText !== "any") {
                (variable as VariableDeclaration).setType(typeText);
            }
        }
    }

    // --- Class Properties ---
    const properties = sourceFile.getDescendantsOfKind(SyntaxKind.PropertyDeclaration);
    for (const prop of properties) {
        if (!(prop as PropertyDeclaration).getTypeNode()) {
            const typeText = (prop as PropertyDeclaration).getType().getText(prop);
            if (typeText !== "any") {
                (prop as PropertyDeclaration).setType(typeText);
            }
        }
    }

    sourceFile.saveSync();
}

console.log("✅ Explicit types added everywhere for isolatedDeclarations!");

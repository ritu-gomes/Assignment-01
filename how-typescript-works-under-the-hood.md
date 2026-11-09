# How TypeScript Actually Works Under the Hood

## Introduction

TypeScript is basically a superset of JavaScript. This means we can write and use JavaScript syntax along with some additional features. One of its main benefits is adding static typing to JavaScript, which is a dynamically typed language.

## How TypeScript Works

JavaScript can run directly in browsers. To run JavaScript outside the browser, Node.js was introduced as a runtime environment powered by Google's V8 engine.

Similarly, TypeScript also needs a compiler to convert TypeScript code into JavaScript before execution. This is because browsers and Node.js cannot normally execute TypeScript directly.

We can install TypeScript using npm in two ways:

**As a development dependency:**

"npm install typescript --save-dev"

**Globally:**

"npm install -g typescript"

The TypeScript compiler checks our code for type errors during compilation, before runtime. This helps us identify potential issues earlier.

## TypeScript Configuration

TypeScript provides a configuration file called `tsconfig.json`, which controls how the compiler behaves. We can create it using:

"tsc --init"

It allows us to configure file locations, output directories, JavaScript versions, and other compiler options.

## Compiling TypeScript

After writing our TypeScript code, we can compile it into JavaScript using:
"tsc"

The compiler reads our configuration and generates JavaScript files that can be executed by browsers or Node.js.

**Compilation Flow:**

TypeScript (.ts) → Compiler (tsc) → JavaScript (.js) → Browser / Node.js

The main purpose of TypeScript is to improve the reliability of JavaScript by adding static typing. It allows us to specify the types of data being passed around in our code and reports errors when the types don't match. This helps us catch potential errors during development instead of discovering them at runtime.

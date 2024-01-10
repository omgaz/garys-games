---
title: Debounce
description: Debounce function calls
slug: debounce
difficulty: intermediate
author: @omgaz
---

<h1 align=center>
  🏀<br>
  Debounce
</h1>

<p align=center><strong>Difficulty</strong>: Intermediate.<br><br></p>

## Challenge

**Given** a timeout in ms, and a function, create a new function so that **when** the new function is called multiple times within the timeout period **then** only call the original function once.

Please use the provided `index.ts` file as your base.

## Example

```ts
const myFunction = () => console.log("Hello World");
const myDebouncedFunction = debounce(1000, myFunction);
myDebouncedFunction();
myDebouncedFunction(); // ignored until 1000ms has passed
// Hello World
```

## Test

```sh
npm test debounce -- --watch
```

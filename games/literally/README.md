---
title: Literally
description: A new number, literally
slug: literally
difficulty: intermediate
author: @omgaz
---

<h1 align=center>
  ➰<br>
  Literally
</h1>

<p align=center><strong>Difficulty</strong>: Beginner.<br><br></p>

## Challenge

**Given** a number, **then** output the number as if read aloud.

e.g. 122455666 --> 1122142536

> One one, two twos, one four, two fives, three sixes

The challenge is, to prefix each number in the sequence with a count of how many times that number appears unbroken.

Please use the provided `index.ts` file as your base.

## Example

```ts
literally(12206655444788));
// 1122102625341728
```

## Test

```sh
npm test literally
```

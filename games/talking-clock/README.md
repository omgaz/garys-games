---
title: Talking Clock
description: A time formatter that converts numbers to words.
slug: talking-clock
difficulty: beginner
author: @omgaz
---

<h1 align=center>
  🕰<br>
  Talking Clock
</h1>

<p align=center><strong>Difficulty</strong>: Beginner.<br><br></p>

## Challenge

**Given** an input of a 24h date format HH:MM, **then** output the time as words in 12h date format.

**Input**: Hours in 24h format (`0-23`), minutes (`0-59`). A colon (`:`) separates the hours from the minutes.

**Output**: A sentence start with `It’s` and the given time in 12h date format as words including am/pm.

Please use the provided `index.ts` file as your base.

## Example

```ts
talkingClock("13:30");
// It’s one thirty pm;
```

## Test

```sh
npm test talking-clock
```

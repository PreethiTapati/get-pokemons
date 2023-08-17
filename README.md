# Get Pokemon

> A simple website allows the user to get different pokemon's by ids.

## Table of contents

- [Get Pokemon](#get-pokemon)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)

## General info

> The objective of the project is to practice using get requests and apply separation of concerns.

## Screenshots

![Example screenshot](./assets/screenShot.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

- clone the repo.
- `npm install`

## Code Examples

```js
const getPokemonById = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!res.ok) {
      throw new Error(`An error has occurred: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('There was an error fetching the Pokémon:', err);
    return null;
  }
};

export default getPokemonById;
```

## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: _in progress_

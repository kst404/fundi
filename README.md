# Fundi
Extremely small Dependency Injection Library in functional way.

## Installation

```yarn add fundi```

## Usage

**Add dependency**
```js
import { registerDep } from 'fundi'
import Database from './database.js'

registerDep('Db')(Database)
```

**Inject dependency**
```js
import withDeps from 'fundi'

const getByName = withDeps(({ Db }) => (name) => {
  return Db.find({ name })
})

console.log(getByName('John'))
```

**Inject dependency, another way**

```js
import withDeps from 'fundi'

function getByNameUsingDb(db, name) {
  return db.find({ name })
}

const getByName = withDeps(({ Db }) => (name) => getByNameUsingDb(Db, name))

console.log(getByName('John'))
```

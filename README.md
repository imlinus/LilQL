# LilQL

I'm just playing around like usual :P

### Example
```js
const people = new LilQL(data)

people
  .where('age', 60)
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    throw new Error(err)
  })
```

### API
- `where` = exact match
- `includes` = string includes
- `except` = everything but

Insperation from https://github.com/eko3alpha/JSQL, but I wanted promises

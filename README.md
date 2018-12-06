# LilQL

I'm just playing around like usual :P

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

Insperation from https://github.com/eko3alpha/JSQL, but I wanted promises

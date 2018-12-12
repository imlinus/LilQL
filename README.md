# 🔍✂️ LilQL

A friend of mine needed to filter some arrays, it got me an idea..
And since I'm just playing around like usual :P
Well.. This is what came out of it.
It does work though, so modify it and have fun =)

### Example
```js
const people = new LilQL(data)

people
  .includes('name', 'jo')
  .orderBy('age', 'asc')
  .limit(2)
  .then(result => {
    console.log(result)
  })
  
/*
[
  { 'name': 'Jocelyn Weeks', 'age': 28, 'city': 'Sant Onofrio' },
  { 'name': 'Raven Jordan', 'age': 32, 'city': 'Atlanta' },
  { 'name': 'Jordan Holden', 'age': 40, 'city': 'Holman' },
  { 'name': 'Jack Gilbert', 'age': 55, 'city': 'Parkland County' }
]
*/

```

### API
- `where` = exact match
- `includes` = string includes
- `except` = everything but
- `orderBy` = asc or desc
- `limit` = any number

Insperation comes from https://github.com/eko3alpha/JSQL,
But this one is like `700 bytes`. So you really can't compare the two.

Cheers

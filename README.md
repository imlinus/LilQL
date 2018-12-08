# LilQL

I'm just playing around like usual :P

### Example
```js
const data = [
  { 'name': 'Portia Zamora', 'age': 62, 'city': 'Morkhoven' },
  { 'name': 'Rahim Wiggins', 'age': 42, 'city': 'Orlando' },
  { 'name': 'Rana Murphy', 'age': 48, 'city': 'Armstrong' },
  { 'name': 'Raven Jordan', 'age': 32, 'city': 'Atlanta' },
  { 'name': 'Jocelyn Weeks', 'age': 28, 'city': 'Sant Onofrio' },
  { 'name': 'Ava Stark', 'age': 62, 'city': 'Colombo' },
  { 'name': 'Noelani Gibson', 'age': 54, 'city': 'Pittsburgh' },
  { 'name': 'Gisela Sykes', 'age': 62, 'city': 'Caramanico Terme' },
  { 'name': 'Maggy Skinner', 'age': 62, 'city': 'Chandigarh' },
  { 'name': 'Jordan Holden', 'age': 40, 'city': 'Holman' },
  { 'name': 'Shoshana Fox', 'age': 62, 'city': 'Ludwigsfelde' },
  { 'name': 'Jack Gilbert', 'age': 55, 'city': 'Parkland County' }
]

const people = new LilQL(data)

people
  .includes('name', 'jo')
  .orderBy('age', 'asc')
  .limit(2)
  .then(result => {
    console.log(result)
  })
```

### API
- `where` = exact match
- `includes` = string includes
- `except` = everything but
- `orderBy` = asc or desc
- `limit` = any number

Insperation from https://github.com/eko3alpha/JSQL, but this one is like `700 bytes`

Cheers

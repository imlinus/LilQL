class LilQL {
  constructor (data) {
    this.data = data
    return this
  }

  each (cb) {
    this.data.forEach((obj, i) => cb(obj, i))
  }

  where (key, val) {
    this.data = this.data.filter(obj => obj[key] === val)
    return this
  }

  includes (key, val) {
    this.data = this.data.filter(obj => obj[key].toLowerCase().indexOf(val) >= 0)
    return this
  }

  orderBy (key, val) {
    this.data.sort((a, b) => val === 'asc' ? (a[key] - b[key]) : (b[key] - a[key]))
    return this
  }

  limit (lng) {
    this.data.splice(lng, this.data.length)
    return this
  }

  then (cb) {
    cb(this.data)
    return this
  }
}

export default LilQL

// except (key, val) {
//   return new Promise((resolve, reject) => {
//     this.temp = this.data
//     this.each((obj, i) => {
//       const str = obj[key].toLowerCase()
//       if (str.includes(val)) this.temp.splice(i, 1)
//     })
//     resolve(this.temp)
//     this.reset()
//   })
// }
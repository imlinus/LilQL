class LilQL {
  constructor (data) {
    this.data = data
    this.temp = []

    return this
  }

  each (cb) {
    this.data.forEach((obj, i) => cb(obj, i))
  }

  reset () {
    this.temp = []
  }

  where (key, val) {
    return new Promise((resolve, reject) => {
      this.each(obj => {
        if (obj[key] === val) this.temp.push(obj)
      })

      resolve(this.temp)
      this.reset()
    })
  }

  includes (key, val) {
    return new Promise(resolve => {
      this.each(obj => {
        const str = obj[key].toLowerCase()
        if (str.includes(val)) this.temp.push(obj)
      })

      resolve(this.temp)
      this.reset()
    })
  }

  except (key, val) {
    return new Promise((resolve, reject) => {
      this.temp = this.data

      this.each(obj => {
        const str = obj[key].toLowerCase()
        if (str.includes(val)) this.temp.splice(i, 1)
      })

      resolve(this.temp)
      this.reset()
    })
  }

  sort (key, val) {
    return new Promise((resolve, reject) => {
      this.temp = this.data
      
      if (val === 'asc') resolve(this.temp.sort((a, b) => a[key] - b[key]))
      else if (val === 'desc') resolve(this.temp.sort((a, b) => b[key] - a[key]))

      this.reset()
    })
  }
}

export default LilQL

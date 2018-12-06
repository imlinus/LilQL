class LilQL {
  constructor (data) {
    this.data = data
    this.temp = []

    return this
  }

  each (cb) {
    for (let i = 0; i < this.data.length; i++) {
      cb(this.data[i], i, this.data)
    }
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
}

export default LilQL

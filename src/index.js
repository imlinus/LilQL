class LilQL {
  constructor (data) {
    this.data = data
    this.temp = []

    console.log(this)
    return this
  }

  reset () {
    this.temp = []
  }

  where (key, val) {
    return new Promise((resolve, reject) => {
      if (this.data.length === 0) reject(this.data)

      this.data.forEach(obj => {
        if (obj[key] === val) this.temp.push(obj)
      })

      resolve(this.temp)
      this.reset()
    })
  }

  includes (key, val) {
    return new Promise((resolve, reject) => {
      if (this.data.length === 0) reject(this.data)

      this.data.forEach(obj => {
        const str = obj[key].toLowerCase()
        if (str.includes(val)) this.temp.push(obj)
      })

      resolve(this.temp)
      this.reset()
    })
  }
}

export default LilQL

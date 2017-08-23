import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
  // return new Promise((resolve, reject) => {
  //   var client = new XMLHttpRequest()
  //   client.open('GET', url)
  //   client.onreadystatechange = handler
  //   client.responseType = 'jsonp'
  //   client.setRequestHeader('Accept', 'application/jsonp')
  //   client.send()
  //   let handler = () => {
  //     if (this.readyState !== 4) {
  //       return
  //     }
  //     if (this.status === 200) {
  //       resolve(this.response)
  //     } else {
  //       reject(new Error(this.statusText))
  //     }
  //   }
  // })
}
var param = (data) => {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http
  .createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname
    if (
      req.method === 'GET' &&
      (pathname === '/' || pathname === '/index.html')
    ) {
      res.setHeader('Content-Type', 'text/html')
      fs.createReadStream('./index.html').pipe(res)
      return
    }
    if (req.method === 'GET' && pathname === '/img.png') {
        res.setHeader('Content-Type', 'image/png')
        fs.createReadStream('./img.png').pipe(res)
        return
      }
      if (req.method === 'GET' && pathname === '/favicon.ico') {
        res.setHeader('Content-Type', 'image/x-icon')
        fs.createReadStream('./favicon.ico').pipe(res)
        return
      }
  
      if (req.method === 'GET' && pathname === '/style.css') {
        res.setHeader('Content-Type', 'text/css')
        fs.createReadStream('./style.css').pipe(res)
        return
      }
    return res.end()
  })
  .listen(3000)
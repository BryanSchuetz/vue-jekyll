// 🎌 BROWSER-SYNC FOR AUTO RELOAD JAZZ-PLUS A BETTER IMPLEMENTATION OF EXTENSIONLESS URLS 🎌
module.exports = {
  "server": "build",
  "port": "8080",
  "files": "build",
  "open": false,
  "notify": false,
  "serveStatic": [
    'build'
  ],
  "serveStaticOptions": {
    "extensions": ['html']
  }
}

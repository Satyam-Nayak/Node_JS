let os = require('os')
console.log(os.platform())
console.log(os.arch())
console.log(os.hostname()) // host name of the system
console.log(os.userInfo())
console.log(os.freemem()/1024/1024/1024)  // free memory present in the system
console.log(os.totalmem()/1024/1024/1024)
console.log(os.tmpdir())
console.log(os.type())
console.log(os.machine())

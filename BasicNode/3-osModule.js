const os = require("os");

const user = os.userInfo();
console.log(user);

const nameOfOs = os.type();
console.log(nameOfOs);

const numberOfCpus = os.cpus(); // 12
console.log(numberOfCpus);

const totalMemory = os.totalmem();
console.log(totalMemory);

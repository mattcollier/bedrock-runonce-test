const bedrock = require('bedrock');
const {util: {delay}, runOnceAsync} = bedrock;
require('./config');

bedrock.events.on('bedrock.started', async () => {
  console.log(`Worker ${process.pid} reporting in.`);
});

bedrock.events.on('bedrock.started', async () => {
  await runOnceAsync('myUniqueId', doSomething);
  console.log(`After runOnceAsync on worker ${process.pid}`);
});

bedrock.start();

async function doSomething() {
  console.log(`Starting to doSomething on worker ${process.pid}`);
  await delay(5000);
  console.log(`Done with doSomething on worker ${process.pid}.`);
}

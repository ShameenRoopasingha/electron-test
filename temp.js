const { getPrisma } = require('./lib/utils');

async function run() {
  const p = getPrisma();
  const res = await p.$queryRaw`SELECT name FROM sqlite_master WHERE type='table'`;
  console.log(res);
}

run();
const { client, createTables, createUser } = require("./db");
const init = async () => {
  console.log("connecting to database");
  await client.connect();
  console.log("connected to database");
  await createTables();
  console.log("tables created");
  const [moe, lucy] = await Promise.all([
    createUser({ name: "moe" }),
    createUser({ name: "lucy" }),
  ]);
  console.log(moe.id, lucy.id);
};

init();

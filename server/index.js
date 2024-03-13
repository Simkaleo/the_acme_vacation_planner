const {
  client,
  createTables,
  createUser,
  createPlace,
  createVacation,
  fetchUsers,
  fetchPlaces,
} = require("./db");
const init = async () => {
  console.log("connecting to database");
  await client.connect();
  console.log("connected to database");
  await createTables();
  console.log("tables created");
  const [moe, lucy, larry, ethyl, paris, london, nyc] = await Promise.all([
    createUser({ name: "moe" }),
    createUser({ name: "lucy" }),
    createUser({ name: "larry" }),
    createUser({ name: "ethyl" }),
    createPlace({ name: "paris" }),
    createPlace({ name: "london" }),
    createPlace({ name: "nyc" }),
  ]);
  console.log(await fetchUsers());
  console.log(await fetchPlaces());

  const vacation = await Promise.all([
    createVacation({
      user_id: moe.id,
      place_id: london.id,
      travel_date: `03/19/2024`,
    }),
  ]);
};

init();

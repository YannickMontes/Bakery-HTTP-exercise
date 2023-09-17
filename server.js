const { makeApp } = require("./app");

const app = makeApp();

app.listen(app.PORT, () => console.log(`Listening on http://localhost:${app.PORT} ...`));

module.exports = app;
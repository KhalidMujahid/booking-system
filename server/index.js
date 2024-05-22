const app = require("./src/servr");
const PORT = process.env.PORT || 3000;
const colors = require("colors");

app.listen(PORT, () =>
  console.log(colors.blue(`Server running on port..${PORT}`))
);

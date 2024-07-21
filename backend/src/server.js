const app = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 3333

// Usado para ouvir uma porta
app.listen(PORT, () => console.log(`Server Runing on Port ${PORT}`));

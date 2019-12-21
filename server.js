const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())
app.use(express.static('./app/public/'));
const apiRoutes = require('./app/routing/apiRoutes.js');
app.use('/api', apiRoutes);
// const clientRoutes = require('./app/routing/clientRoutes.js');
// app.use('/', clientRoutes);
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);

})
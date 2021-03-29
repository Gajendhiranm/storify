const app = require("express")()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT || 5002

const {MONGOURI} = require("./config/index")
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
}, () => console.log("Connected to DB"))

const router = require("./routes/route")
app.use(router)

app.listen(PORT, () => console.log("Connected to port" + PORT))
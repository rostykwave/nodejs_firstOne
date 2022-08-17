const express = require("express");
const morgan = require("morgan");
const got = require("got");
const app = express();
require("dotenv").config();

const { router } = require("./booksRouter");
const PORT = process.env.PORT;
// const PORT = process.env.PORT || 8081;//without dotenv
// const PORT = 8081;
const thirdPartyBaseUrl = "http://api.weatherbit.io/v2.0/current";
const thirdPartyApiKey = process.env.WEATHER_API_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use("/api", router);

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
//   next();
// });

//http://api.weatherbit.io/v2.0/current?key=ea41bc3d393b41638cdd827b88acf3ef&lat=50.427107&lon=30.567437

app.get("/api/weather", async (req, res) => {
  try {
    const response = await got(thirdPartyBaseUrl, {
      searchParams: {
        key: thirdPartyApiKey,
        lat: "50.427107",
        lon: "30.567437",
      },
      responseType: "json",
    });
    const [weatherData] = response.body.data;
    const {
      city_name,
      weather: { description },
      temp,
    } = weatherData;

    res.json({ city_name, description, temp });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at a servers launch: ", err);
  }
  console.log(`Server works at port ${PORT}!`);
});

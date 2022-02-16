const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.listen(process.env.PORT || 3000, () =>
  console.log("App running on port 3000, http://localhost:3000")
);

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

var cors = require("cors");
app.use(cors());

app.get("/", (request, response) => {
  console.log("Siteye giriş isteği geldi");
  response.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/css/*", (request, response) => {
  response.sendFile(path.join(__dirname + "/css/" + request.params[0]));
});
app.get("/js/*", (request, response) => {
  response.sendFile(path.join(__dirname + "/js/" + request.params[0]));
});

app.get("/fonts/*", (request, response) => {
  response.sendFile(path.join(__dirname + "/fonts/" + request.params[0]));
});

app.get("/images/*", (request, response) => {
  response.sendFile(path.join(__dirname + "/images/" + request.params[0]));
});

app.get("/marsil", (request, response) => {
  response.send("Merhaba Ben Marsillll....");
});

app.get("/comments", (request, response) => {
  fs.readFile("./db/comments.json", (hata, data) => {
    if (hata) throw hata;
    let html = "";

    let comlist = JSON.parse(data.toString()).comments;

    for (let c of comlist) {
      html += `<li style="color: black;" class="list-group-item"><a href="#"></a> ${c}</li>`;
    }

    response.send(html);
  });
});

app.get("/winelist", (request, response) => {
  fs.readFile("./db/comments.json", (hata, data) => {
    if (hata) throw hata;
    let wines = JSON.stringify(JSON.parse(data.toString()).wines);
    console.log(wines);
    response.send(wines);
  });
});

app.post("/nazli", function requestHandler(req, res) {
  const survey = req.body;
  console.log(survey);
  console.log(typeof survey);
  console.log(survey.comment);

  fs.readFile("./db/comments.json", (err, data) => {
    if (err) throw err;
    let db = JSON.parse(data.toString());
    console.log(typeof db);
    db.comments.push(survey.comment);

    const wdata = new Uint8Array(Buffer.from(JSON.stringify(db)));

    fs.writeFile("./db/comments.json", wdata, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });

  console.log("STARRRR ***");
  res.send("Gonderildi!");
});

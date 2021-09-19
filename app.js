"use strict";
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.render("first");
});

app.get("/food", (req, res) => {
  res.render("food");
});

app.get("/doctor", (req, res) => {
  res.render("doctor");
})

app.get("/medicine", (req, res) => {
  res.render("medicine");
})

app.get("/covid", (req, res) => {
  res.render("covid");
})

app.get("/signUp", (req, res) => {
  res.render("signUp");
})

app.get("/donation", (req, res) => {
  res.render("donation");
})

app.get("/oxy", (req, res) => {
  res.render("oxygen");
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});

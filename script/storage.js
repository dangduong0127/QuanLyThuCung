"use strict";
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const row = document.getElementById("tbody");
const inputID = document.getElementById("input-id");
const inputName = document.getElementById("input-name");
const age = document.getElementById("input-age");
const type = document.getElementById("input-type");
const Weight = document.getElementById("input-weight");
const Length = document.getElementById("input-length");
const color = document.getElementById("input-color-1");
const Breed = document.getElementById("input-breed");
const healthyBtn = document.getElementById("healthy-btn");
const submitBtn = document.getElementById("submit-btn");
const a = document.getElementById("sidebar");
// animation
a.addEventListener("click", () => {
  a.classList.toggle("active");
});

const data = [
  {
    ID: "P001",
    Name: "Tom",
    Type: "Cat",
    Weight: 5,
    Length: 50,
    Age: 2,
    Color: "#000000",
    Breed: "Tabby",
    Vaccinated: true,
    Dewormed: true,
    Sterilized: true,
    BMIrs: "?",
    date: new Date(),
  },

  {
    ID: "P002",
    Name: "Name02",
    Type: "Cat",
    Weight: 5,
    Length: 4,
    Age: 1,
    Color: "#ffffff",
    Breed: "Terrier",
    Vaccinated: true,
    Dewormed: true,
    Sterilized: true,
    BMIrs: "?",
    date: new Date(),
  },
  {
    ID: "P003",
    Name: "Dog02",
    Type: "dog",
    Weight: 5,
    Length: 3,
    Age: 4,
    Color: "green",
    Breed: "Terrier",
    Vaccinated: true,
    Dewormed: false,
    Sterilized: true,
    BMIrs: "?",
    date: new Date(),
  },
];
localStorage.setItem("Pets", JSON.stringify(data));
let dataTb = JSON.parse(localStorage.getItem("Pets")) || [];

let breedArr = [
  {
    name: "Mixed Breed",
    type: "Cat",
  },
  {
    name: "Mixed Breed",
    type: "Dog",
  },
  {
    name: "Domestic Short Hair",
    type: "Cat",
  },
  {
    name: "Tabby",
    type: "Cat",
  },
  {
    name: "Husky",
    type: "Dog",
  },
  {
    name: "Doberman Pinscher",
    type: "Dog",
  },
];
let BreedsData = JSON.parse(localStorage.getItem("Breeds")) || [];

localStorage.setItem("Breeds", JSON.stringify(breedArr));

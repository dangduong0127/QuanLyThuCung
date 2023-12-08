"use strict";
const breedInput = document.getElementById("input-breed");
const TypeInput = document.getElementById("input-type");
const stt = document.getElementsByClassName("stt");

// let BreedsData = JSON.parse(localStorage.getItem("Breeds")) || [];

let renderBreedTable = (array) => {
  row.innerHTML = null;
  array.forEach((x, i) => {
    row.innerHTML += `
    <tr id="tr">
        <td scope="col" class="stt">${i + 1}</td>
        <td scope="col" colspan="4">${x.name}</td>
        <td scope="col">${x.type}</td>
        <td scope="col"><button type="button" onclick="Delete(${i})" class="btn btn-danger btndelete">Delete</button>
        </td>
    </tr>
    `;
  });
};
renderBreedTable(BreedsData);
let Delete = (id) => {
  //   console.log(stt[id].innerHTML);
  if (confirm("Bạn có chắc chắn muốn xoá giống này")) {
    let search = BreedsData.filter((x, i) => i + 1 != stt[id].innerHTML);
    localStorage.setItem("Breeds", JSON.stringify(search));
    renderBreedTable(search);
  }
};

// Submit
let Submit = () => {
  if (BreedsData.length === 0) {
    if (breedInput.value === "") {
      alert("Chưa nhập giống chó mèo");
    } else if (type.value === "Select Type") {
      alert("Chưa nhập loại thú cưng");
    } else {
      BreedsData.push({
        name: breedInput.value,
        type: TypeInput.value,
      });
      localStorage.setItem("Breeds", JSON.stringify(BreedsData));
      renderBreedTable(BreedsData);
    }
  } else {
    let search = BreedsData.find((x) => x.name === breedInput.value);
    if (breedInput.value === "") {
      alert("Chưa nhập giống chó mèo");
    } else if (type.value === "Select Type") {
      alert("Chưa nhập loại thú cưng");
    } else {
      if (search === undefined) {
        BreedsData.push({
          name: breedInput.value,
          type: TypeInput.value,
        });
        localStorage.setItem("Breeds", JSON.stringify(BreedsData));
        renderBreedTable(BreedsData);
      } else {
        alert("This Breed is already exist");
        return;
      }
    }
  }
};

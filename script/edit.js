"use strict";
const formEdit = document.getElementById("FormEdit");

function RenderDataTable(array) {
  row.innerHTML = null;
  array.forEach((data) => {
    let d = new Date();
    let date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let strDate = `${date}/${month}/${year}`;
    // console.log(data.ID);
    row.innerHTML += `
              <tr id="tr">
                  <td id=${data.ID} scope="row" style="font-weight: bold;">${
      data.ID
    }</td>
                  <td>${data.Name}</td>
                  <td>${data.Age}</td>
                  <td>${data.Type}</td>
                  <td>${data.Weight} kg</td>
                  <td>${data.Length} cm</td>
                  <td>${data.Breed}</td>
                  <td>
                      <i class="bi bi-square-fill" style="color: ${
                        data.Color
                      }"></i>
                  </td>
                  <td><i class="bi ${
                    data.Vaccinated
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i></td>
                  <td><i class="bi ${
                    data.Dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
                  }"></i></td>
                  <td><i class="bi ${
                    data.Sterilized
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i></td>
                  <td>${strDate}</td>
                  <td><button type="button" class="btn btn-warning btndelete" onclick="startEditPet(${
                    data.ID
                  })" id="btn-edit">Edit</button>
                  </td>
              </tr>
            `;
  });
}

RenderDataTable(dataTb);

// Edit Button
let startEditPet = (petId) => {
  formEdit.style.display = "block";
  let search = dataTb.find((x) => x.ID === petId.id);
  //   console.log(search);
  if (search !== undefined) {
    inputID.value = search.ID;
    inputName.value = search.Name;
    age.value = search.Age;
    type.value = search.Type;
    Weight.value = search.Weight;
    Length.value = search.Length;
    color.value = search.Color;
    Breed.value = search.Breed;
    vaccinatedInput.checked = search.Vaccinated;
    dewormedInput.checked = search.Dewormed;
    sterilizedInput.checked = search.Sterilized;
  }
  // renderBreed();
};
// Btn Submit
let BtnSubmit = () => {
  if (inputName.value === "") {
    alert("Please input for name");
  } else if (isNaN(age.value) !== true && age.value === "") {
    alert("Please input for age");
  } else if (type.value === "Select Type") {
    alert("Please select type!!!");
  } else if (isNaN(Weight.value) !== true && Weight.value === "") {
    if (isNaN(Weight.value) !== true) {
      alert("Please input a number for Weight");
      return;
    }
    alert("Please input for weight");
  } else if (Length.value === "") {
    if (isNaN(Length.value) !== true) {
      alert("Please input a number for length");
      return;
    }
    alert("Please input for length");
  } else if (Breed.value === "Select Breed") {
    alert("Please input for breed");
  } else {
    for (let i in dataTb) {
      if (dataTb[i].ID === inputID.value) {
        dataTb[i].ID = inputID.value;
        dataTb[i].Name = inputName.value;
        (dataTb[i].Type = type.value),
          (dataTb[i].Weight = parseInt(Weight.value)),
          (dataTb[i].Length = parseInt(Length.value)),
          (dataTb[i].Age = parseInt(age.value)),
          (dataTb[i].Color = color.value),
          (dataTb[i].Breed = Breed.value),
          (dataTb[i].Vaccinated = vaccinatedInput.checked),
          (dataTb[i].Dewormed = dewormedInput.checked),
          (dataTb[i].Sterilized = sterilizedInput.checked),
          (dataTb[i].BMIrs = "?"),
          (dataTb[i].date = new Date());
      }
    }
    console.log(dataTb);
    localStorage.setItem("Pets", JSON.stringify(dataTb));
    RenderDataTable(dataTb);
  }
};

// Change Breed following pets type
let renderBreed = () => {
  if (type.value === "Cat") {
    Breed.innerHTML = `<option>Select Breed</option>`;
    let search = BreedsData.filter((x) => x.type === "Cat");
    search.forEach((x) => {
      Breed.innerHTML += `
          <option>${x.name}</option>
        `;
      // console.log(Breed);
    });
  } else {
    Breed.innerHTML = `<option>Select Breed</option>`;
    let search = BreedsData.filter((x) => x.type === "Dog");
    search.forEach((x) => {
      Breed.innerHTML += `
          <option>${x.name}</option>
        `;
      // console.log(Breed);
    });
  }
};

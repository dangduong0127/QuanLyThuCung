"use strict";

// Print all pets form localStorage
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
                      data.Dewormed
                        ? "bi-check-circle-fill"
                        : "bi-x-circle-fill"
                    }"></i></td>
                    <td><i class="bi ${
                      data.Sterilized
                        ? "bi-check-circle-fill"
                        : "bi-x-circle-fill"
                    }"></i></td>
                    <td>${strDate}</td>
                    
                </tr>
              `;
  });
}
RenderDataTable(dataTb);

// Search Function
let SearchPet = () => {
  // let searchByID = dataTb.filter((x) =>
  //   x.ID.includes(inputID.value.toUpperCase())
  // );
  // let searchByName = dataTb.filter((x) => x.Name.includes(inputName.value));
  // let searchByType = dataTb.filter((x) => x.Type.includes(type.value));
  // let searchByBreed = dataTb.filter((x) => x.Breed.includes(Breed.value));
  // let searchByVaccin = dataTb.filter(
  //   (x) => x.Vaccinated === vaccinatedInput.checked
  // );
  // let searchByDeworm = dataTb.filter(
  //   (x) => x.Dewormed === dewormedInput.checked
  // );
  // let searchBySterilize = dataTb.filter(
  //   (x) => x.Sterilized === sterilizedInput.checked
  // );

  let Arr = dataTb;
  if (inputID.value) {
    Arr = Arr.filter((x) => x.ID.includes(inputID.value.toUpperCase()));
  }
  if (inputName.value) {
    Arr = Arr.filter((x) => x.Name.includes(inputName.value));
  }
  if (type.value !== "Select Type") {
    Arr = Arr.filter((x) => x.Type.includes(type.value));
  }
  if (Breed.value !== "Select Breed") {
    Arr = Arr.filter((x) => x.Breed.includes(Breed.value));
  }
  if (vaccinatedInput.checked) {
    Arr = Arr.filter((x) => x.Vaccinated === vaccinatedInput.checked);
  }
  if (dewormedInput.checked) {
    Arr = Arr.filter((x) => x.Dewormed === dewormedInput.checked);
  }

  if (sterilizedInput.checked) {
    Arr = Arr.filter((x) => x.Sterilized === sterilizedInput.checked);
  }
  RenderDataTable(Arr);
  console.log(Arr);
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
  } else if (type.value === "Select Type") {
    Breed.innerHTML = `
        <option>Select Breed</option>
        <option>Tabby</option>
        <option>Domestic Medium Hair</option>
        <option>Mixed Breed</option>
        <option>Domestic Short Hair</option>
        <option>Terrier</option>
        <option>Greyhound</option>
        <option>Persian</option>
        <option>Rottweiler</option>
    `;
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

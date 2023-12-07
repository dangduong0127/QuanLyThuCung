"use strict";
let dataTb = JSON.parse(localStorage.getItem("Pets")) || [];

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
                  data.Vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
                }"></i></td>
                <td><i class="bi ${
                  data.Dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
                }"></i></td>
                <td><i class="bi ${
                  data.Sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
                }"></i></td>
                <td class="BMIbtn">${data.BMIrs}</td>
                <td>${strDate}</td>
                <td><button type="button" class="btn btn-danger btndelete" onclick="Delete(${
                  data.ID
                })" id="btn-delete">Delete</button>
                </td>
            </tr>
          `;
  });
}

RenderDataTable(dataTb);

//Submit
let BtnSubmit = () => {
  event.preventDefault();

  if (dataTb.length === 0) {
    if (inputID.value === "") {
      alert("Chưa nhập ID");
    } else if (inputName.value === "") {
      alert("Chưa nhập tên thú cưng");
    } else if (age.value === "") {
      alert("Chưa nhập tuổi");
    } else if (type.value === "") {
      alert("Chưa nhập loại thú cưng");
    } else {
      dataTb.push({
        ID: inputID.value,
        Name: inputName.value,
        Type: type.value,
        Weight: parseInt(Weight.value),
        Length: parseInt(Length.value),
        Age: parseInt(age.value),
        Color: color.value,
        Breed: Breed.value,
        Vaccinated: vaccinatedInput.checked,
        Dewormed: dewormedInput.checked,
        Sterilized: sterilizedInput.checked,
        BMIrs: "?",
        date: new Date(),
      });
      localStorage.setItem("Pets", JSON.stringify(dataTb));
      RenderDataTable(dataTb);
      clearInput();
    }
  } else {
    let search = dataTb.find((x) => x.ID === inputID.value);

    if (search !== undefined) {
      alert("ID này đã tồn tại vui lòng nhập ID khác");
      return;
    } else {
      if (inputID.value === "") {
        alert("Chưa nhập ID");
      } else if (inputName.value === "") {
        alert("Chưa nhập tên thú cưng");
      } else if (age.value === "") {
        alert("Chưa nhập tuổi");
      } else if (type.value === "") {
        alert("Chưa nhập loại thú cưng");
      } else {
        dataTb.push({
          ID: inputID.value,
          Name: inputName.value,
          Type: type.value,
          Weight: parseInt(Weight.value),
          Length: parseInt(Length.value),
          Age: parseInt(age.value),
          Color: color.value,
          Breed: Breed.value,
          Vaccinated: vaccinatedInput.checked,
          Dewormed: dewormedInput.checked,
          Sterilized: sterilizedInput.checked,
          BMIrs: "?",
          date: new Date(),
        });
        localStorage.setItem("Pets", JSON.stringify(dataTb));
        RenderDataTable(dataTb);
        clearInput();
      }
    }
  }
};

function clearInput() {
  inputID.value = "";
  type.value = "Select Type";
  inputName.value = "";
  Weight.value = "";
  Length.value = "";
  age.value = "";
  color.value = "";
  Breed.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}
//Show Healthy Pets
let ShowHealthyPet = () => {
  let search = dataTb.filter(
    (x) => x.Vaccinated == true && x.Dewormed == true && x.Sterilized == true
  );

  if (healthyBtn.innerHTML === "Show Healthy Pet") {
    healthyBtn.innerHTML = "Show All Pet";
    RenderDataTable(search);
  } else {
    healthyBtn.innerHTML = "Show Healthy Pet";
    RenderDataTable(dataTb);
  }
};

// Delete
let Delete = (id) => {
  if (confirm("Bạn chắc chắn muốn xoá chứ?")) {
    let search = dataTb.filter((x) => x.ID != id.innerHTML);
    RenderDataTable(search);
    localStorage.setItem("Pets", JSON.stringify(search));
    // console.log(search);
  }
};

//Calculate BMI
let CalculateBMI = () => {
  //function BMI for cat
  function BMIforCat(weight, length) {
    return (weight * 886) / length ** 2;
  }
  //function BMI for dog
  function BMIforDog(weight, length) {
    return (weight * 703) / length ** 2;
  }

  dataTb.filter((x) =>
    x.Type === "Cat"
      ? (x.BMIrs = BMIforCat(x.Weight, x.Length).toFixed(2))
      : (x.BMIrs = BMIforDog(x.Weight, x.Length).toFixed(2))
  );
  localStorage.setItem("Pets", JSON.stringify(dataTb));
  RenderDataTable(dataTb);
};

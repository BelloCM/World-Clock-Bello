function updateTime() {
  let pacificElement = document.querySelector("#pacific");
  if (pacificElement) {
    let pacificDateElement = pacificElement.querySelector(".date");
    let pacificTimeElement = pacificElement.querySelector(".time");
    let pacificTime = moment().tz("Canada/pacific");

    pacificDateElement.innerHTML = moment().format("dddd, Do , YYYY");
    pacificTimeElement.innerHTML = pacificTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");

    johannesburgDateElement.innerHTML = moment().format("dddd, Do , YYYY");
    johannesburgTimeElement.innerHTML = moment().format("H:mm:ss [<small>]A");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
};

updateTime();
setInterval(updateTime,1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity,);

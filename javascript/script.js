

setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  let pretoriaElement = document.querySelector("#pretoria");
  let pretoriaDateElement = pretoriaElement.querySelector(".date");
  let pretoriaTimeElement = pretoriaElement.querySelector(".time");

  newYorkDateElement.innerHTML = moment().format("dddd, Do , YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  pretoriaDateElement.innerHTML = moment().format("dddd, Do , YYYY");
  pretoriaTimeElement.innerHTML = moment().format("H:m:ss [<small>]A");
});
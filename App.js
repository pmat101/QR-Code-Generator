document.getElementById("submit").addEventListener("click", function () {
  let input = document.getElementById("input");
  let img = document.getElementById("img");
  img.setAttribute(
    "src",
    `http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=140x140`
  );
  input.value = "";
  document.querySelector(".main").style.height = "500px";
  img.style.display = "block";
});

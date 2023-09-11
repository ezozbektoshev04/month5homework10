let url = "https://ap-countries-api.vercel.app/all";
let cards = document.querySelector(".cards");
let emptyArr = [];
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    emptyArr.push(data);
    return emptyArr;
  })
  .then((data) => {
    let str = "";
    data.map((el) =>
      el.data.map((country) => {
        str += `   
        <div class="card">
        <div class="card-img"><img src="${country.flags.png}" alt="" class="img1"/></div>
        <div class="card-bottom">
        <a href="./detail.html" class="a1" onclick="getId(\'${country.name.common}\')">${country.name.common}</a>
          <div class="d1" id="d1">
            <p class="p2">Population:</p>
            <p class="p3">${country.population}</p>
          </div>
          <div class="d1">
            <p class="p2">Region:</p>
            <p class="p3">${country.region}</p>
          </div>
          <div class="d1">
            <p class="p2">Capital:</p>
            <p class="p3">${country.capital}</p>
          </div>
        </div>
      </div> `;
        cards.innerHTML = str;
      })
    );
  })
  .catch((err) => {
    console.log(err);
  });
function getId(id) {
  localStorage.setItem("name", JSON.stringify(id));
}

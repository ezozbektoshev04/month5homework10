let countryName = localStorage.getItem("name");
let a = countryName.slice(1, length - 1);
console.log(a);
let url = "https://ap-countries-api.vercel.app/all";
let cards = document.querySelector(".detail-cards");
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
        if (country.name.common == a) {
          str += `   
          <div class="detail-card">
              <div class="d11">
                <img src="${country.flags.png}" alt="" class="img10"/>
              </div>
              <div class="d12">
                <div class="d13">
                  <p class="p11">${country.name.common}</p>
                  <div class="d14">
                    <p class="p12">Native Name:</p>
                    <p class="p13">${country.name.official}</p>
                  </div>
                  <div class="d14">
                    <p class="p12">Population:</p>
                    <p class="p13">${country.population}</p>
                  </div>
                  <div class="d14">
                    <p class="p12">Regiom:</p>
                    <p class="p13">${country.region}</p>
                  </div>
                  <div class="d14">
                    <p class="p12">Sub Regiom:</p>
                    <p class="p13">${country.subregion}</p>
                  </div>
                  <div class="d14">
                    <p class="p12">Capital:</p>
                    <p class="p13">${country.capital}</p>
                  </div>
                  <div class="d14">
                    <p class="p12">Border Countries:</p>
                    <p class="p13">${
                      country.borders !== undefined ? country.borders : ""
                    }</p>
                  </div>
                </div>        
              </div>
            </div>`;
          cards.innerHTML = str;
        }
      })
    );
  })
  .catch((err) => {
    console.log(err);
  });

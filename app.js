const btn = document.getElementById("btn");
const result = document.querySelector(".result");

btn.addEventListener("click", async () => {

    const res = await fetch("cars.json");
    const data = await res.json();

    console.log(data);

    let output = "";

    data.map(car => {
        output += `
            <div class="cars">
                <h2>Márka: ${car.Márka}</h2>
                <h3>Márka: ${car.Típus}</h3>
                <h3>Márka: ${car.Évjárat}</h3>
            </div>
        `;
    })
    result.innerHTML = output;
})
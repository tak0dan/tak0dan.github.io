const button = document.getElementById("convert");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    const amount = parseFloat(document.getElementById("amount").value);

    if (!amount || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }



    fetch("https://api.frankfurter.dev/v1/latest?base=EUR")
        .then(response => response.json())
        .then(data => {

            result.innerHTML = "";
            const rates = data.rates;

            Object.keys(rates).forEach(currency => {

                const value = (rates[currency] * amount).toFixed(2);

                const li = document.createElement("li");

                li.textContent = `${currency}: ${value}`;

                result.appendChild(li);

            });

        })
        .catch(error => {
            console.error(error);
            alert("Error fetching data");
        });
    });
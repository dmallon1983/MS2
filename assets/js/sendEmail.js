function sendMail(contactForm) {
    emailjs.send("gmail", "your_11", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email_address.value,
            "player_request": contactForm.legend.value,
            "request_reason": contactForm.reason.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}

let legends = ["Lev Yashin", "Gordon Banks", "Gianluigi Buffon", "Manuel Neuer", "Iker Casillas", "Edwin Van Der Sar", "Cafu", "Roberto Carlos", "Ashley Cole", "Gary Neville", "Danny McGrain", "Philip Lahm", "Javier Zanetti", "Dani Alves", "Carlos Alberto", "Franz Beckenbeaur", "Franco Baresi", "Paolo Maldini", "Rio Ferdinand", "Nemanja Vidic", "John Terry", "Billy McNeill", "Virgil Van Dijk", "Fabio Cannavaro", "Xavi", "Andres Iniesta", "Roy Keane", "Zinedine Zidane", "Paul Scholes", "Patrick Viera", "Andrea Pirlo", "Claude Makalele", "Bobby Charlton", "Graeme Souness", "Diego Maradona", "Pele", "Ronaldo", "Cristiano Ronaldo", "Lionel Messi", "Thierry Henry", "Ferenc Puskas", "Ronaldinho", "Robert Lewandowski", "Henrik Larsson"];

let form = document.getElementById("signup-form");
form.addEventListener('submit', handleSubmit);

// let errorMsg = document.getElementById("errors");

function handleSubmit(event) {
    event.preventDefault();
    let legend = document.getElementById("legend");
    if (legends.includes(legend.value)) {
        // errorMsg.innerHTML = `${legend.value} is already available for selection. If you would like another legend please try again.`;
        alert(`${legend.value} is already available for selection. If you would like another legend please try again.`);
    } else {
        form.submit();
        console.log('legends');
    }
}
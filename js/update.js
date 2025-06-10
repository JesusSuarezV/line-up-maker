const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    window.location.href = "/index.html";

});

let currentPage = 0;
const updatesContainer = document.getElementById('updates');

const selectBtn = document.getElementById('loadFormation');
const jsonInput = document.getElementById('jsonFileInput');

const pagContainer = document.getElementById('pagination');

let updates = []

async function loadUptades() {
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('https://jesussuarezv.github.io/lum-data/available_data/updates.json');
        const data = await response.json();
        updates = data;

        console.log("ola1")
    } catch (error) {
        console.error("Error while loading updates", error);
    }

    loadPagination();
})


function loadPagination() {
    console.log("ola")
    const pages = Math.ceil(updates.length / 3);
    pagContainer.innerHTML = '';
    updatesContainer.innerHTML = '';
    if (currentPage !== 0) {
        const btn0 = document.createElement("button");
        btn0.textContent = '<<';
        btn0.id = 'firstBtn'
        const btnBack = document.createElement("button");
        btnBack.textContent = '<';
        btnBack.id = 'backBtn'
        pagContainer.appendChild(btn0);
        pagContainer.appendChild(btnBack);
    }

    for (let i = Math.max(0, currentPage - 3); i < Math.min(currentPage + 4, pages); i++) {
        const btnPage = document.createElement("button");
        if (i == currentPage) {
            btnPage.className = "current-pag";
        }
        btnPage.textContent = i + 1;
        pagContainer.appendChild(btnPage);
    }

    if (currentPage != pages - 1) {

        const btnNext = document.createElement("button");
        btnNext.textContent = '>';
        btnNext.id = 'nextBtn'
        const btnEnd = document.createElement("button");
        btnEnd.textContent = '>>';
        btnEnd.id = 'lastBtn'
        pagContainer.appendChild(btnNext);
        pagContainer.appendChild(btnEnd);
    }

    const pageUpdates = updates.slice((currentPage * 3), (currentPage * 3) + 3);
    pageUpdates.forEach(up => {
        console.log("Oe")
        const update = document.createElement("div");
        update.className = "update";

        const updateInfo = document.createElement("div");
        updateInfo.className = "update-info";

        const title = document.createElement("h2");
        title.textContent = up.title;
        updateInfo.appendChild(title);

        const date = document.createElement("h3");
        date.textContent = up.date;
        updateInfo.appendChild(date);

        update.appendChild(updateInfo);

        const img = document.createElement("img");
        img.src = up.imageURL;
        update.appendChild(img);

        updatesContainer.appendChild(update);
    });


}

pagContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === "button") {
        if (target.id === "firstBtn") {
            currentPage = 0;
            loadPagination();
        } else if (target.id === "backBtn") {
            currentPage--;
            loadPagination();
        } else if (target.id === "nextBtn") {
            currentPage++;
            loadPagination();
        } else if (target.id === "lastBtn") {
            currentPage = Math.ceil(updates.length / 3) - 1;
            loadPagination();
        } else {

            currentPage = parseInt(target.textContent) - 1;
            loadPagination();
        }


    }
});



selectBtn.addEventListener('click', () => {
    jsonInput.click();
});

jsonInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            const football = data.team.football;
            const formation = data.team.lineup.formation;
            const players = data.team.lineup.players;

            sessionStorage.setItem('players', JSON.stringify(players));
            sessionStorage.setItem('formation', JSON.stringify(formation));
            console.log(football);
            switch (football) {
                case 11:
                    window.location.href = '../html/11.html';
                    break;
                case 7:
                    window.location.href = '../html/7.html';
                    break;
                case 5:
                    window.location.href = '../html/5.html';
                    break;
            }
        } catch (error) {
            alert('An error occurred while trying to read the JSON file. The JSON may be corrupted');
            console.error(error);
        }
    };

    reader.readAsText(file);
});
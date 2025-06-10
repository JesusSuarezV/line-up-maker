const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    window.location.href = "/index.html";

});


const selectBtn = document.getElementById('loadFormation');
const jsonInput = document.getElementById('jsonFileInput');

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
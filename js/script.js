const logo = document.getElementById("logo");

const selectBtn = document.getElementById('loadFormation');
const jsonInput = document.getElementById('jsonFileInput');

let formations;


const savePlayerForm = document.getElementById('savePlayerForm');


const formationSelect = document.getElementById("formations");

const lineupContainer = document.getElementById("lineup");

formationSelect.addEventListener("change", (event) => {
    const newFormation = event.target.value;

    if (newFormation != lineup.formation) {
        const currentPositions = formations[lineup.formation];
        const newPositions = formations[newFormation];

        lineup.players.forEach((player) => {

            const currentIndex = currentPositions.indexOf(player.position);


            player.position = newPositions[currentIndex];

        });
        lineup.formation = newFormation;
        changeFormation(newFormation);







    }
    console.log(lineup.players);
    loadPlayers();
});


function changeFormation(newFormation) {
    switch (newFormation) {
        case ("4-3-3"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf10">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="wingers">
                <div class="player" id="pf9">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf8">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm-1">
                <div class="player" id="pf7">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cmd-1">
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="full-1">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cb-1">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case "4-4-2":
            lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf10">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>

                <div class="player" id="pf9">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cm-2">
                <div class="player" id="pf8">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf7">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cmd-2">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="full-1">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb-1">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;

        case "4-2-3-1":
            lineupContainer.innerHTML = `<div class="forward-2">
                <div class="player" id="pf10">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="wingers-2">
                <div class="player" id="pf9">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf8">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf7">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cmd-2">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="full-1">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb-1">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("4-3-1-2"):
            lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf10">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf9">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cam-1">
                <div class="player" id="pf8">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm-1">
                <div class="player" id="pf7">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cmd-1">
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="full-1">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb-1">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("3-5-2"): lineupContainer.innerHTML = `<div class="forward-3">
                <div class="player" id="pf10">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf9">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm-3">
                <div class="player" id="pf8">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf7">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cmd-3">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="full-2">
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb-2">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("3-4-3"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf10">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="wingers">
                <div class="player" id="pf9">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf8">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cmd-4">
                <div class="player" id="pf7">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="full-2">
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb-2">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("2-3-1"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm7">
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cb7">
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("3-2-1"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm7">
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cb7">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("2-2-2"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm7">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cb7">
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("1-3-2"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm7">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb7">
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("3-1-2"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf6">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf5">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="cm7">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb7">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("2-1-1"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cm7">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb7">
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("1-2-1"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cm7">
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb7">
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("1-1-2"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cm7">
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb7">
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
        case ("2-0-2"): lineupContainer.innerHTML = `<div class="forward">
                <div class="player" id="pf4">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf3">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>
            <div class="cb7">
                <div class="player" id="pf2">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
                <div class="player" id="pf1">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>

            <div class="gk">
                <div class="player" id="pf0">
                    <div>
                        <h1>-</h1>
                        <img src="../img/default.png" alt="Player's photo">
                    </div>
                    <h2>-</h2>
                </div>
            </div>`
            break;
    }
}

function loadDefaultFormation() {
    const formationSelector = document.getElementById("formations");
    if (!lineup.formation) {
        const formation = formationSelector.value;
        if (formation) {
            lineup.formation = formation;
            console.log("Load default formation");
        }
    }
    else {
        formationSelector.value = lineup.formation;
        changeFormation(lineup.formation);
        console.log("Load imported formation");
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('https://jesussuarezv.github.io/lum-data/available_data/formations.json');
        formations = await response.json();
    } catch (error) {
        console.error("Error while loading formations", error);
    }


    lineup.players = JSON.parse(sessionStorage.getItem('players') || '[]');
    const stored = sessionStorage.getItem('formation');
    lineup.formation = stored ? JSON.parse(stored) : '';

    sessionStorage.clear();
    console.log(lineup.players, lineup.formation);
    loadDefaultFormation();
    loadAvailablePositions();
    loadPlayers();
});


logo.addEventListener("click", () => {
    window.location.href = "../index.html";

});


function downloadImage() {
    const node = document.getElementById('lineup');

    htmlToImage.toPng(node, {
        backgroundColor: null,
        style: {
            margin: 0
        }
    })
        .then(dataUrl => {
            const link = document.createElement('a');
            link.download = 'lineup.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(error => {
            alert("⚠️ WARNING: THE TRAINING CONTAINS IMAGES THAT ARE BLOCKED DUE TO CROSS-ORIGIN ACCESS 🚫. PLEASE DELETE OR REPLACE THEM BEFORE DOWNLOADING ⬇️.")
            console.error('Error:', error);
        });
}

function formAddPlayer() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeFormAddPlayer() {
    document.getElementById('modalOverlay').style.display = 'none';
}


savePlayerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const position = document.getElementById('positions').value;
    const name = document.getElementById('playerName').value;
    const number = document.getElementById('playerNumber').value;
    const imageUrl = document.getElementById('playerImage').value;


    const player = {
        name: name,
        number: number,
        position: position,
        imageUrl: imageUrl
    };

    lineup.players.push(player);
    savePlayerForm.reset();
    closeFormAddPlayer();

    loadPlayers();
});

function loadPlayers() {
    const starting = [];
    const formation = formations[lineup.formation + ''];

    const players = lineup.players || [];

    formation.forEach(position => {
        const player = players.find(j => j.position === position);

        starting.push(player || {
            name: "-",
            number: "-",
            position: position,
            imageUrl: "../img/default.png"
        });
    });

    console.log(starting);


    for (let i = 0; i < starting.length; i++) {
        const row = document.getElementById("p" + i);
        row.innerHTML = '';
        const position = document.createElement('td');
        position.textContent = starting[i].position;
        row.appendChild(position);

        const number = document.createElement('td');
        number.textContent = starting[i].number;
        row.appendChild(number);

        const name = document.createElement('td');
        name.textContent = starting[i].name;
        row.appendChild(name);

        const image = document.createElement('td');
        const imageUrl = document.createElement('img');
        imageUrl.className = 'photo';
        imageUrl.src = starting[i].imageUrl || '../img/default.png';
        imageUrl.onerror = function () {
            imageField.onerror = null;
            imageField.src = '../img/default.png';
        };

        image.appendChild(imageUrl);
        row.appendChild(image);

        const deleteBody = document.createElement('td');
        const deleteIco = document.createElement('img');
        deleteIco.onclick = function () {
            deletePlayer(position.textContent);
        };
        //a
        if (starting[i].number != '-') {
            deleteIco.className = 'trash';
        } else {
            deleteIco.className = 'trash-disable';
        }

        deleteIco.src = '../img/trash.png'
        deleteBody.appendChild(deleteIco);
        row.appendChild(deleteBody);


        const playerField = document.getElementById("pf" + i);

        playerField.innerHTML = '';

        const div = document.createElement('div');
        const numberField = document.createElement('h1');
        numberField.textContent = number.textContent;
        div.appendChild(numberField);
        const imageField = document.createElement('img');
        imageField.src = imageUrl.src;
        imageField.onerror = function () {
            imageField.onerror = null;
            imageField.src = '../img/default.png';
        };

        div.appendChild(imageField);
        playerField.appendChild(div);

        const nameField = document.createElement('h2');
        nameField.textContent = name.textContent;
        playerField.appendChild(nameField);

        loadAvailablePositions();

    }




}

function deletePlayer(position) {
    lineup.players = lineup.players.filter(player => player.position != position);
    loadPlayers();
    loadAvailablePositions();
}

function loadAvailablePositions() {
    const selector = document.getElementById("positions");
    const btnAddPlayer = document.getElementById("btnAddPlayer");
    const allPositions = formations[lineup.formation] || [];
    console.log(lineup);
    const occupiedPositions = lineup.players.map(j => j.position);
    const availablePosition = allPositions.filter(p => !occupiedPositions.includes(p));

    selector.innerHTML = "";

    if (availablePosition.length > 0) {
        availablePosition.forEach(pos => {
            const option = document.createElement("option");
            option.value = pos;
            option.textContent = pos;
            selector.appendChild(option);
        });
        btnAddPlayer.disabled = false;
        btnAddPlayer.style.backgroundColor = '#3db183';
    } else {
        btnAddPlayer.disabled = true;
        btnAddPlayer.style.backgroundColor = '#777777';
    }

}

function exportFormation(football) {
    const formationData = {
        team: {
            football: football,
            lineup: lineup
        }
    };

    const jsonString = JSON.stringify(formationData, null, 2);


    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "lineup.json";
    a.click();
    URL.revokeObjectURL(url);
}

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

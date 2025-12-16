let flip7PlayerCount = 0;

function flip7AddPlayer() {
    const flip7PlayersToAdd = Number(document.getElementById("flip7-player-count").value);
    const container = document.getElementById("flip7-players-container");
    let flip7NewPlayerCount = 0;

    for (; flip7NewPlayerCount < flip7PlayersToAdd; flip7PlayerCount++) {
        flip7NewPlayerCount++
        const playerID = `player-${flip7PlayerCount + 1}`;
        const row = document.createElement("div");

        row.id = `flip7-${playerID}`;
        row.className = "flip7-player";
        row.innerHTML = `
            <input id="flip7-${playerID}-name" class="flip7-player-name">
            <input id="flip7-${playerID}-total" type="number" value="0" class="flip7-player-total" readonly>
            <input id="flip7-${playerID}-hand" type="number" class="flip7-player-hand">
            <button type="button" onclick="flip7AddScore('${playerID}')" class="flip7-add-score">+</button>
        `;

        container.appendChild(row);
        }
    }




function flip7AddScore(playerID){
    const player_total = document.getElementById(`flip7-${playerID}-total`);
    const player_hand = document.getElementById(`flip7-${playerID}-hand`);

    const total = Number(player_total.value) || 0
    const hand = Number(player_hand.value) || 0

    player_total.value = total + hand
    player_hand.value = 0
}
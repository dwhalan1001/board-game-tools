let flip7PlayerCount = 3;

function flip7AddPlayer(){
    flip7PlayerCount++

    const container = document.getElementById("flip7-players-container");

    const playerID = `player-${flip7PlayerCount}`;

    const row = document.createElement("div");
    row.id = `flip7-${playerID}`;
    row.className = "flip7-player";

    row.innerHTML = `
        <input id="flip7-${playerID}-name" class="flip7-player-name">
        <input id="flip7-${playerID}-total" type="number" value="0" class="flip7-player-total" readonly>
        <input id="flip7-${playerID}-hand" type="number" class="flip7-player-hand">
        <button onclick="flip7AddScore('${playerID}')" class="flip7-add-score">+</button>
    `;

    container.appendChild(row);
}

function flip7AddScore(playerID){
    const player_total = document.getElementById(`flip7-${playerID}-total`);
    const player_hand = document.getElementById(`flip7-${playerID}-hand`);

    const total = Number(player_total.value) || 0
    const hand = Number(player_hand.value) || 0

    player_total.value = total + hand
    player_hand.value = 0
}
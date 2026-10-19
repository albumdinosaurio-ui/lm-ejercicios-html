let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;   
function juego(jugador) { 
         const opciones = ["piedra", "papel", "tijera"];
         const maquina = opciones[Math.floor(Math.random() * opciones.length)];
let mensaje;
        if (jugador === maquina) {
            mensaje = "¡Empate!";
        } else if (
            (jugador === "piedra" && maquina === "tijera") ||
            (jugador === "papel" && maquina === "piedra") ||
            (jugador === "tijera" && maquina === "papel")
        ) {
            mensaje = "¡Ganaste!";
            ganadas++;
        } else {
            mensaje = "¡Gana la máquina!";
            perdidas++;
        }
        document.getElementById("resultado-jugador").textContent = `Tu elección: ${jugador}`;
        document.getElementById("resultado-maquina").textContent = `Elección de la máquina: ${maquina}`;
        document.getElementById("mensaje").textContent = mensaje;
        document.getElementById("marcador").textContent = `Partidas jugadas: ${partidas}`;
        document.getElementById("ganadas").textContent = `Ganadas: ${ganadas}`;
        document.getElementById("empatadas").textContent = `Empatadas: ${empatadas}`;
        document.getElementById("perdidas").textContent = `Perdidas: ${perdidas}`;

    }

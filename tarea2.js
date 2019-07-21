// 0 - Domingo ... 6 Sabado
var calendario = require("node-schedule");
calendario.scheduleJob({
    hour: 16,
    minute: 50,
    dayOfWeek: 0
}, () => {
    console.log("Ejecutandose tarea todos los domingos a las 16.50");
})
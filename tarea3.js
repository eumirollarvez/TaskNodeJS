var calendario = require("node-schedule");
var rule = new calendario.RecurrenceRule();

rule.hour = 17;
rule.minute = 00;
rule.dayOfWeek = [0, 1, 2, 3];

calendario.scheduleJob(rule, () => console.log("Se ejecuta las tareas algunos dias de la seman a las 5 pm"));
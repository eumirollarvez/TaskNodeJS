var calendario = require("node-schedule");

const rule = new calendario.RecurrenceRule();

rule.second = new calendario.Range(0, 59, 2);

calendario.scheduleJob(
    rule, () => {
        console.log(new Date(), "Ejecucion de tarea cada 2 segundos");
    }
);
export var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["SABADO"] = 6] = "SABADO";
    DiaDaSemana[DiaDaSemana["DOMINGO"] = 0] = "DOMINGO";
    // sem declarar, domingo ficaria 7 porque o sábado veio antes nas declarações!
    DiaDaSemana[DiaDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
    DiaDaSemana[DiaDaSemana["TERCA"] = 2] = "TERCA";
    DiaDaSemana[DiaDaSemana["QUARTA"] = 3] = "QUARTA";
    DiaDaSemana[DiaDaSemana["QUINTA"] = 4] = "QUINTA";
    DiaDaSemana[DiaDaSemana["SEXTA"] = 5] = "SEXTA";
})(DiaDaSemana || (DiaDaSemana = {}));

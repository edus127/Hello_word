let estudiante1 = {
    name: 'Geovani',
    apellidos: 'Sierra Robles',
    anios: 26
}

let masViejo = function(estudiante1, estudiante2) {
    if(estudiante1.anios > estudiante2.anios) {
        return estudiante1.name;
    } else {
        return estudiante2.name
    }
}

let estudianteMasViejo = masViejo(estudiante1, estudiante2);
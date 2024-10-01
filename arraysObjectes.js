 // Activitat 1
 const estudiant = {
    nom: `Joan`,
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

function activitat1() {
    const nom = estudiant.nom;
    const edat = estudiant.edat;
    const mates = estudiant.notes.matematiques;

    const ex1 = document.getElementById("ex1");
    ex1.innerHTML = (`${nom} té ${edat} anys i ha obtingut un ${mates} en matemàtiques`);
}

// Activitat 2
const cordenades = [12, 5, 8];
function activitat2() {
    const x = cordenades[0];
    const y = cordenades[1];
    const z = cordenades[2];

    const ex2 = document.getElementById("ex2");
    ex2.innerHTML = (`X=${x} Y=${y} Z=${z}`);
}

// Activitat 3
const preus = [100, 200, 300, 400];
function activitat3() {
    let modificacio = preus.map(x => x * 0.10);

    const ex3 = document.getElementById("ex3");
    ex3.innerHTML = (`Modificació: ${modificacio}`);
}

// Activitat 4
const edats = [16, 21, 18, 24, 12, 30];
function activitat4() {
    let filtre = edats.filter((edat) => edat > 18);

    const ex4 = document.getElementById("ex4");
    ex4.innerHTML = (`Edats majors de 18: ${filtre}`);
}

// Activitat 5
const notes = [7, 9, 5, 10, 8];
function activitat5() {
    let reduccio = notes.reduce((acumulacio, nota) => acumulacio + nota, 0);
    const ex5 = document.getElementById("ex5");
    ex5.innerHTML = (`Total de notes: ${reduccio}`);
}

// Activitat 6
function producte(nom, preu, quantitat) {
    const preuDescomptat = preu * 0.95;

    const producte = {
        nom: nom,
        preu: preuDescomptat,
        quantitat: quantitat
    };
    return producte;
}

function activitat6() {
    const nom = "Funda"; 
    const quantitat = 2;

    const nouProducte = producte(nom, preu, quantitat);
        
    const ex6 = document.getElementById("ex6");
    ex6.innerHTML = JSON.stringify(nouProducte, null, 2) + ". ";
}


  

// Activitat 7
function activitat7() {
    const cotxe = {
        marca: 'Tesla',
        model: 'Model S',
        preu: 800000
    };

    cotxe.any = 2023;

    const marca = cotxe.marca;
    const model = cotxe.model;
    const preu = cotxe.preu;
    const any = cotxe.any; // Aquí afegim la variable 'any'

    const ex7 = document.getElementById("ex7");
    ex7.innerHTML = (`Marca: ${marca}, Model: ${model}, Preu: ${preu}, Any: ${any}`);
}
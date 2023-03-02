


let NumeroDinheiro = document.querySelector("#NumeroDi");
let output = 100000;
output = parseInt(output);

let precoB = 1000;
precoB = parseInt(precoB);

let precoBV = 500;
precoBV = parseInt(precoBV);

// Barcos

let MyShips = 1;
MyShips = parseInt(MyShips);

let UnitShip = 1;
UnitShip = parseInt(UnitShip);

let NumeroBarcos = document.querySelector("#NumeroBa");

let NumeroSoldado = document.querySelector("#NumeroSo");

let MySoldados = 64;
MySoldados = parseInt(MySoldados);

let UnitSoldiers = 1;
UnitSoldiers = parseInt(UnitSoldiers);

let precoS = 200;
precoS = parseInt(precoS);

let precoSV = 50;
precoSV = parseInt(precoSV);

let NumeroMinerador = document.querySelector("#NumeroMi");

let Mywork = 8;
Mywork = parseInt(Mywork);

let UnitWork = 1;
UnitWork = parseInt(UnitWork);

let precoMi = 800;
precoMi = parseInt(precoMi);

let precoMiV = 400;
precoMiV = parseInt(precoMiV);

let NumeroMuro = document.querySelector("#NumeroMu");

let Mywall = 0;
Mywall = parseInt(Mywall);

let UnitWall = 1;
UnitWall = parseInt(UnitWall);

let precoM = 300;
precoM = parseInt(precoM);

let precoMV = 100;
precoMV = parseInt(precoMV);

let NumeroFazendeiro = document.querySelector("#NumeroFa");

MyFarmer = 0;
MyFarmer = parseInt(MyFarmer);

let UnitFarmer = 1;
UnitFarmer = parseInt(UnitFarmer);

let precoTR = 500;
precoTR = parseInt(precoTR);

let precoTRV = 200;
precoTRV = parseInt(precoTRV);

let NumeroLenhador = document.querySelector("#NumeroLe");

MyLenhador = 0;
MyLenhador = parseInt(MyLenhador);

let UnitLenhador = 1;
UnitLenhador = parseInt(UnitLenhador);

let precoLE = 500;
precoLE = parseInt(precoLE);

let precoLEV = 200;
precoLEV = parseInt(precoLEV);

let NumeroConstrutor = document.querySelector("#NumeroCo");

MyConstrutor = 0;
MyConstrutor = parseInt(MyConstrutor);

let UnitConstrutor = 1;
UnitConstrutor = parseInt(UnitConstrutor);

let precoCo = 500;
precoCo = parseInt(precoCo);

let precoCoV = 200;
precoCoV = parseInt(precoCoV);

let NumeroBarmen = document.querySelector("#NumeroBr");

MyBarmen = 0;
MyBarmen = parseInt(MyBarmen);

let UnitBarmen = 1;
UnitBarmen = parseInt(UnitBarmen);

let precoBr = 500;
precoBr = parseInt(precoBr);

let precoBrV = 200;
precoBrV = parseInt(precoBrV);

// Produtores e Produto

let NumeroTrigo = document.querySelector("#NumeroTrigo");
let Trigo = 0;
Trigo = parseInt(Trigo);

let NumeroMadeira = document.querySelector("#NumeroMadeira");
let Madeira = 0;
Madeira = parseInt(Madeira);

let NumeroMadeiraRefinada = document.querySelector("#NumeroMadeira-refinada");
let Refinada = 0;
Refinada = parseInt(Refinada);

let NumeroBebida = document.querySelector("#NumeroBebidas");
let Cervejas = 0;
Cervejas = parseInt(Cervejas);

function ComprarBarco() {

    if (output < 1000) {
        MostrarDados();
    } else if (output >= 1000) {
        output -= precoB;
        MyShips += UnitShip;
        MostrarDados();
    }
}

function VenderBarco() {

    if (MyShips <= 0) {
        MostrarDados();
    } else if (MyShips >= 1) {
        output += precoBV;
        MyShips -= UnitShip;
        MostrarDados();
    }
}

function ComprarSoldado() {

    if (output < 200) {
        MostrarDados();
    } else if (output >= 200) {
        output -= precoS;
        MySoldados += UnitSoldiers;
        MostrarDados();
    }
}

function VenderSoldado() {

    if (MySoldados <= 0) {
        MostrarDados();
    } else if (MySoldados >= 1) {
        output += precoSV;
        MySoldados -= UnitSoldiers;
        MostrarDados();
    }
}

function ComprarMinerador() {

    if (output < 800) {
        MostrarDados();
    } else if (output >= 800) {
        output -= precoMi;
        Mywork += UnitWork;
        MostrarDados();
    }
}

function VenderMinerador() {

    if (Mywork <= 0) {
        MostrarDados();
    } else if (Mywork >= 1) {
        output += precoMiV;
        Mywork -= UnitWork;
        MostrarDados();
    }
}

function ComprarMuro() {

    if (output < 300) {
        MostrarDados();
    } else if (output >= 1) {
        output -= precoM;
        Mywall += UnitWall;
        MostrarDados();
    }
}

function VenderMuro() {

    if (Mywall <= 0) {
        MostrarDados();
    } else if (Mywall >= 1) {
        output += precoMV;
        Mywall -= UnitWall;
        MostrarDados();
    }
}

function ComprarFazendeiro() {

    if (output < 500) {
        MostrarDados();
    } else if (output >= 1) {
        output -= precoTR;
        MyFarmer += UnitFarmer;
        MostrarDados();
    }
}

function VenderFazendeiro() {

    if (MyFarmer <= 0) {
        MostrarDados();
    } else if (MyFarmer >= 1) {
        output += precoTRV;
        MyFarmer -= UnitFarmer;
        MostrarDados();
    }
}

function ComprarLenhador() {

    if (output < 500) {
        MostrarDados();
    } else if (output >= 1) {
        output -= precoLE;
        MyLenhador += UnitLenhador;
        MostrarDados();
    }
}

function VenderLenhador() {

    if (MyLenhador <= 0) {
        MostrarDados();
    } else if (MyLenhador >= 1) {
        output += precoLEV;
        MyLenhador -= UnitLenhador;
        MostrarDados();
    }
}

function ComprarConstrutor() {

    if (output < 500) {
        MostrarDados();
    } else if (output >= 1) {
        output -= precoCo;
        MyConstrutor += UnitConstrutor;
        MostrarDados();
    }
}

function VenderConstrutor() {

    if (MyConstrutor <= 0) {
        MostrarDados();
    } else if (MyConstrutor >= 1) {
        output += precoCoV;
        MyConstrutor -= UnitConstrutor;
        MostrarDados();
    }
}

function ComprarBarmen() {

    if (output < 500) {
        MostrarDados();
    } else if (output >= 1) {
        output -= precoBr;
        MyBarmen += UnitBarmen;
        MostrarDados();
    }
}

function VenderBarmen() {

    if (MyBarmen <= 0) {
        MostrarDados();
    } else if (MyBarmen >= 1) {
        output += precoBrV;
        MyBarmen -= UnitBarmen;
        MostrarDados();
    }
}

// Produções

function Colheita() {
    let Trigos = 8;
    Trigos = parseInt(Trigos);

    Trigos *= MyFarmer;

    Trigo += Trigos;
    MostrarDados();
}
setInterval(Colheita, 30000);

function Troncos() {
    let Madeiras = 8;
    Madeiras = parseInt(Madeiras);

    Madeiras *= MyLenhador;

    Madeira += Madeiras;
    MostrarDados();
}
setInterval(Troncos, 30000);

/* function MadeiraRef() {
    let PrecoRef = 5;
    PrecoRef = parseInt(PrecoRef);
    let MRefinadas = 2;
    MRefinadas = parseInt(MRefinadas);

    if (Madeira < 5){
        MostrarDados();
    } else if (Madeira >= 5){
        PrecoRef *= MyConstrutor = Madeira; 
        MRefinadas *= MyConstrutor = Refinada;
        MostrarDados();
    }

}
setInterval(MadeiraRef, 30000);
*/

function BebidaProd() {
    let Bebidas = 5;
    Bebidas = parseInt(Bebidas);

    Bebidas *= MyBarmen;

    Cervejas += Bebidas;
    MostrarDados();
}

setInterval(BebidaProd, 30000);

function Money() {
    let Dinheiro = 25;
    Dinheiro = parseInt(Dinheiro);

    Dinheiro *= Mywork;

    output += Dinheiro;
    MostrarDados();
}
setInterval(Money, 30000);

/*let Armymen = document.querySelector("#Centro");

function Army() {
    if (MySoldados >= 112) {
        Armymen.style.display = "block";
    } else if (MySoldados < 112) {
        Armymen.style.display = "none";
    }
}*/

function MostrarDados() {
    NumeroDinheiro.innerHTML = output;
    NumeroBarcos.innerHTML = MyShips;
    NumeroSoldado.innerHTML = MySoldados;
    NumeroMinerador.innerHTML = Mywork;
    NumeroMuro.innerHTML = Mywall;
    NumeroFazendeiro.innerHTML = MyFarmer;
    NumeroTrigo.innerHTML = Trigo;
    NumeroLenhador.innerHTML = MyLenhador;
    NumeroMadeira.innerHTML = Madeira;
    NumeroConstrutor.innerHTML = MyConstrutor;
    NumeroMadeiraRefinada.innerHTML = Refinada;
    NumeroBarmen.innerHTML = MyBarmen;
    NumeroBebida.innerHTML = Cervejas;
    NumeroFelicidade.innerHTML = MyFelicidade;
}
import Foguete from "./src/Models/Foguete";

let f: Foguete = new Foguete("Grande", -5, 2970000, "Foguete Jovem", "Rosa",);

let f1: Foguete = new Foguete();
f1.tamanho = "Pequeno";
f1.cor = "Azul";
f1.peso = 970000.00;
f1.nome = "Foguete Jovem 2"
f1.qtdeTripulantes = 8;

f.imprimeAtributos();
f1.imprimeAtributos();
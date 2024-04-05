import Animal from "./src/Models/Animal";


let a: Animal = new Animal();

a.setEspecie("Felino");
a.setNome("Garfield");
a.setIdade(7);
a.setPorte("Médio");
a.setPeso(8);

a.imprimeAtributos();
a.emitirSom();
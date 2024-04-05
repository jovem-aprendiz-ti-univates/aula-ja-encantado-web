export default class Animal {

    private especie: string = "";
    private nome: string = "";
    private idade: number = 0;
    private porte: string = "";
    private peso: number = 0;

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string) {
        this.especie = especie;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number) {
        this.idade = idade;
    }

    public getPorte(): string {
        return this.porte;
    }

    public setPorte(porte: string) {
        this.porte = porte;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number) {
        this.peso = peso;
    }

    public emitirSom(): void {
        console.log("Animal está emitindo som.");
    }

    public imprimeAtributos(): void {
        console.log("Espécie: " + this.especie);
        console.log(`Nome: ${this.nome}`);
        console.log("Idade: " + this.idade);
        console.log("Porte: " + this.porte);
        console.log("Peso: " + this.peso);
    }

}
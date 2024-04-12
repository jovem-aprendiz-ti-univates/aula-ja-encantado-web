export default class Foguete {
    private _tamanho: string = "";
    private _qtdeTripulantes: number = 0;
    private _peso: number = 0;
    private _nome: string = "";
    private _cor: string = "";

    constructor(tamanho?: string,
        qtdeTripulantes?: number,
        peso?: number,
        nome?: string,
        cor?: string
    ) {
        if (tamanho !== undefined) {
            this.tamanho = tamanho;
        }
        if (qtdeTripulantes !== undefined) {
            this.qtdeTripulantes = qtdeTripulantes;
        }
        if (peso !== undefined) {
            this.peso = peso;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
    }

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(value: string) {
        this._tamanho = value;
    }

    public get qtdeTripulantes(): number {
        return this._qtdeTripulantes;
    }

    public set qtdeTripulantes(value: number) {
        if (value > 0) {
            this._qtdeTripulantes = value;
        }
    }

    public get peso(): number {
        return this._peso;
    }

    public set peso(value: number) {
        this._peso = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public imprimeAtributos(): void {
        console.log(`Cor: ${this._cor}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Peso: ${this._peso}`);
        console.log(`Lugares: ${this._qtdeTripulantes}`);
        console.log(`Tamanho: ${this._tamanho}`)
    }
}
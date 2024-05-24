export default class Bebida {

    private _id: number = 0;
    private _cor: string = "";
    private _temperatura: string = "";
    private _quantidade: number = 0;
    private _teorAlcool: number = 0;
    private _nome: string = "";

    constructor(id?: number,
        cor?: string,
        temperatura?: string,
        quantidade?: number,
        teorAlcool?: number,
        nome?: string
    ) {
        if (id !== undefined) {
            this.id = id;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
        if (temperatura !== undefined) {
            this._temperatura = temperatura;
        }
        if (quantidade !== undefined) {
            this._quantidade = quantidade;
        }
        if (teorAlcool !== undefined) {
            this._teorAlcool = teorAlcool;
        }
        if (nome !== undefined) {
            this._nome = nome;
        }
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public get temperatura(): string {
        return this._temperatura;
    }

    public set temperatura(value: string) {
        this._temperatura = value;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(value: number) {
        this._quantidade = value;
    }

    public get teorAlcool(): number {
        return this._teorAlcool;
    }

    public set teorAlcool(value: number) {
        this._teorAlcool = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public imprimeAtributos(): void {
        console.log("");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Temperatura: ${this._temperatura}`);
        console.log(`Teor alcoólico: ${this._teorAlcool} %`);
        console.log(`Quantidade: ${this._quantidade} l`);
    }

}
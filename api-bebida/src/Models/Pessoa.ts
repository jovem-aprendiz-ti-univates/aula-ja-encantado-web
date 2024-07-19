export default class Pessoa {

    private _id: number = 0;
    private _nome: string = "";
    private _dataNascimento: string = "";
    private _altura: number = 0;
    private _peso: number = 0;

    constructor(id?: number,
        nome?: string,
        dataNascimento?: string,
        altura?: number,
        peso?: number,

    ) {
        if (id !== undefined) {
            this.id = id;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (dataNascimento !== undefined) {
            this._dataNascimento = dataNascimento;
        }
        if (altura !== undefined) {
            this.altura = altura;
        }
        if (peso !== undefined) {
            this.peso = peso;
        }
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get dataNascimento(): string {
        return this._dataNascimento;
    }

    public set dataNascimento(value: string) {
        this._dataNascimento = value;
    }

    public get altura(): number {
        return this._altura;
    }

    public set altura(value: number) {
        this._altura = value;
    }


    public get peso(): number {
        return this._peso;
    }

    public set peso(value: number) {
        this._peso = value;
    }

}
export default class Mochila {

    private _tamanho: string = "";
    private _cor: string = "";
    private _valor: number = 0;

    constructor(tamanho?: string,
        cor?: string,
        valor?: number
    ) {
        if (tamanho !== undefined) {
            this.tamanho = tamanho;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
        if (valor !== undefined) {
            this.valor = valor;
        }
    }

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(value: string) {
        this._tamanho = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public get valor(): number {
        return this._valor;
    }

    public set valor(value: number) {
        this._valor = value;
    }

    public imprimeAtributos(): void {
        console.log(`Tamanho: ${this.tamanho}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Valor: ${this.valor}`);
    }
}
export interface PrecoProps {
  produtoId: number;
  mercadoId: number;
  usuarioId: number;
  preco: number;
  promocao?: boolean;
  motivoPromocao?: string;
  observacao?: string;
  data?: Date;
}

export class Preco {
  private _id: number;
  private _produtoId: number;
  private _mercadoId: number;
  private _usuarioId: number;
  private _preco: number;
  private _data: Date;
  private _promocao: boolean;
  private _motivoPromocao?: string;
  private _observacao?: string;
  private _createdAt: Date;

  constructor(props: PrecoProps, id?: number, createdAt?: Date) {
    this._id = id ?? 0;
    this._createdAt = createdAt ?? new Date();
    this._produtoId = props.produtoId;
    this._mercadoId = props.mercadoId;
    this._usuarioId = props.usuarioId;
    
    
    if (props.preco < 0) {
      throw new Error("O valor do preço não pode ser negativo.");
    }
    this._preco = props.preco;
    
    this._promocao = props.promocao ?? false;
    this._motivoPromocao = props.motivoPromocao;
    this._observacao = props.observacao;
    this._data = props.data ?? new Date();
  }

  // Para o Controller conseguir ler os dados
  public get id(): number { return this._id; }
  public get produtoId(): number { return this._produtoId; }
  public get mercadoId(): number { return this._mercadoId; }
  public get usuarioId(): number { return this._usuarioId; }
  public get preco(): number { return this._preco; }
  public get data(): Date { return this._data; }
  public get promocao(): boolean { return this._promocao; }
  public get motivoPromocao(): string | undefined { return this._motivoPromocao; }
  public get observacao(): string | undefined { return this._observacao; }
  public get createdAt(): Date { return this._createdAt; }

  // Para permitir alterações como atualizar o valor do preço
  public set preco(value: number) {
    if (value < 0) throw new Error("O valor do preço não pode ser negativo.");
    this._preco = value;
  }
  public set promocao(value: boolean) { this._promocao = value; }
  public set motivoPromocao(value: string | undefined) { this._motivoPromocao = value; }
  public set observacao(value: string | undefined) { this._observacao = value; }
}
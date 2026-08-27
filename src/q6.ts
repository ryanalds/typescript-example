export interface Ave {
  voar(): string;
}

export class Pinguim implements Ave {
  nome : string;
  velocidadeNatacao : number; //km/h
  constructor(nome: string, velocidadeNatacao: number) {
    this.nome = nome;
    this.velocidadeNatacao = velocidadeNatacao;
  }

  voar(): string {
    return `${this.nome} não consegue voar, mas nada a ${this.velocidadeNatacao} km/h`;
  }
}

export class Pombo implements Ave {
  nome : string;
  altitudeMaxima : number; // metros
  constructor(nome: string, altitudeMaxima: number) {
    this.nome = nome;
    this.altitudeMaxima = altitudeMaxima;
  }

  voar(): string {
    return `${this.nome} está voando a ${this.altitudeMaxima} metros de altitude`;
  }
}
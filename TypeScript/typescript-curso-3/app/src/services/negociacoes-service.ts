import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json()) // converte dados requeridos
      .then((dados: NegociacoesDoDia[]) => {
        // array de tipo da interface que criamos para evitar erros
        // de compilação (dadoDeHoje. dá até autocomplete)
        return dados.map((dadoDeHoje) => {
          return new Negociacao(
            new Date(), // cria com data atual
            dadoDeHoje.vezes, // e estes dois dados
            dadoDeHoje.montante // do local host
          ); // que demos npm start (depois de install)
        }); // na pasta servidor-api
      });
  }
}

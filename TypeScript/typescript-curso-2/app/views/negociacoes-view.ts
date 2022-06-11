import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>    
          </tr>
      </thead>
      <tbody>
          
      ${model.lista().map(negociacao => {
// Intl é classe de internacionalização do ECMAScript        
        return `
        <tr>
          <td>
          ${new Intl.DateTimeFormat().format(negociacao.data)}
          </td>

          <td>
          ${negociacao.quantidade}
          </td>

          <td>
          ${negociacao.valor}
          </td>
        </tr>
        `;
      }).join('')
// join porque o lista().map() retorna um Array!
// lista() retorna nosso Array de negociacoes.ts
// map organiza uma nova por arrowFunction a partir dos três dados (data, quantidade e valor)
      }
      </tbody>
    </table>
    `;
  }

  update(model: Negociacoes): void {
  // Model é o Array de Negociações feita ao final do curso 1!!
    const template = this.template(model);
    // console.log(template); // Para visualizar no console como fica.
    this.elemento.innerHTML = template;
  }
}

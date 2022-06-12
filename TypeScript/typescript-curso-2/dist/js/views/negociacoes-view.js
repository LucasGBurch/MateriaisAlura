import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
          ${this.formatar(negociacao.data)}
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
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}

export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
        // Recebe o id da div onde fica a tabela do template(), renderizada pelo update()!!
    }
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
        // Intl é classe de internacionalização do ECMAScript
        // join porque o lista().map() retorna um Array!
        }
      </tbody>
    </table>
    `;
    }
    update(model) {
        // Model é o Array de Negociações feita ao final do curso 1!!
        const template = this.template(model);
        // console.log(template); // Para visualizar no console como fica.
        this.elemento.innerHTML = template;
    }
}

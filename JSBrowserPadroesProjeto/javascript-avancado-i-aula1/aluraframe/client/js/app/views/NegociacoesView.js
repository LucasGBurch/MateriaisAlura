class NegociacoesView {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(model) {
    return ` 
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
        </tr>
    </thead>
    
    <tbody>
      ${
        model.negociacoes
          .map((n) => {
            // No tbody: percorremos a lista de negociações e retornamos cada uma em linha (tr) de tabela com seus dados (td)!!

            return `
          <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
          </tr>
        `; // Como o map só gera strings, o .join ao final concatena TODAS!!
          })
          .join('')

        // O poder de Template String é mostrar dados registrados no formulário SEM NECESSIDADE DE PERCORRER O DOM!!!

        // Observação: um só parâmetro dispensaria () no n e as {} da ArrowFunction. O return também quando há um só comando, mas deixei todos por descargo de consciência. A arrow iria direto: => map(n => ` (...) `).join('')
      }
    </tbody>
    
    <tfoot>
      <td colspan="3"> TOTAL </td>
      <td>${
        model.negociacoes.reduce((total, n) => {
          return total + n.volume;
        }, 0.0) // total começa em 0.0: segundo parâmetro do reduce(), o primeiro é a function para usar o n.volume de cada linha da tabela a ser somada ao total!!
      }</td>
    </tfoot>
    </table>  
    `;
  }

  update(model) {
    this._elemento.innerHTML = this._template(model);
  }
}

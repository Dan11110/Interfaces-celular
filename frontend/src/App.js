import React, {useReducer, Provider} from 'react';
import './App.css';
const App = (props) => {

  return (
    <Provider store={store}>
      <div className="App">
        <button>Meu Botão</button>
        <table>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Capacidade de Memória(GB)</th>
              <th>Data de lançamento</th>
              <th>Alterar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dado 1</td>
              <td>Dado 2</td>
              <td>Dado 3</td>
              <td>Dado 4</td>
              <td>Dado 5</td>
              <td>Dado 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Provider>
  );
}

export default App;
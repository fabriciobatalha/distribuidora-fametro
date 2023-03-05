<template>
  <div id="app">
    <OHeader />
    Teste
    <p>Brendo 1</p>
    <p>Brendo 2</p>
    <title>Forms</title>
  <body>
    <h1>FORMS</h1>
    <div class="tabelas">
      <form id="clientes">
        <h1>Clientes</h1>
        <label for="nomeCliente">Nome Cliente</label><br />
        <input type="text" name="nomeCliente" /> <br />

        <label for="cpf">Cpf</label> <br />
        <input type="text" name="cpf" /><br />

        <label for="endereco">Endereço</label> <br />
        <input type="text" name="endereco" /> <br />

        <label for="telefone" name="telefone">Telefone</label> <br />
        <input type="tel" name="telefone" /> <br />
        <br />
        <input type="submit" value="Enviar" />
        <br />
      </form>
      <form id="funcionarios">
        <h1>Funcionarios</h1>
        <label for="nomeFuncionario">Nome Funcionario</label> <br />
        <input type="text" name="nomeFuncionario" /><br />

        <label for="cargo">Cargo</label> <br />
        <input type="text" name="cargo" /><br />

        <label for="endFuncionario">Endereço</label> <br />
        <input type="text" name="endFuncionario" /> <br />

        <label for="telFuncionario" name="telefone">Telefone</label> <br />
        <input type="tel" name="telFuncionario" /> <br />
        <br />

        <input type="submit" value="Enviar" />
        <br />
      </form>
      <form id="produtos">
        <h1>Produtos</h1>

        <label for="descProd">Descrição Produto</label> <br />
        <input type="text" name="descProd" /><br />

        <label for="quantidade">Quantidade</label> <br />
        <input type="number" name="Quantidade" /><br />

        <label for="preco">Preço</label> <br />
        <input type="number" name="preco" /> <br />
        <br />

        <input type="submit" value="Enviar" />
      </form>
      <form id="produtos">
        <h1>Entregador</h1>

        <label for="nomeEnt">Nome Entregador</label> <br />
        <input type="text" name="nomeEnt" /><br />

        <label for="telefoneEnt">Telefone</label> <br />
        <input type="tel" name="telefoneEnt" /><br />

        <label for="pedido">Number Pedido</label> <br />
        <input type="number" name="pedido" /> <br />

        <label for="numCliente">Numero CLiente</label> <br />
        <input type="tel" name="numCliente" /> <br />
        <br />

        <input type="submit" value="Enviar" />
        <br />
      </form>
      <form>
        <h1>Pedidos</h1>

        <label for="data">Data e Hora Pedido</label> <br />
        <input type="datetime" name="data" /><br />

        <label for="nfe">Nota Fiscal</label> <br />
        <input type="number" name="nfe" /><br />

        <input type="submit" value="Enviar" />
        <br />
      </form>
    </div>
    <select id="lista1">
      <option value="">Lista de Clientes</option>
      <option value="opcao1">Opção 1</option>
      <option value="opcao2">Opção 2</option>
      <option value="opcao3">Opção 3</option>
    </select>
    <select id="lista1">
      <option value="">Lista de Funcionarios</option>
      <option value="opcao1">Opção 1</option>
      <option value="opcao2">Opção 2</option>
      <option value="opcao3">Opção 3</option>
    </select>
    <select id="lista1">
      <option value="">Lista de Produtos</option>
      <option value="opcao1">Opção 1</option>
      <option value="opcao2">Opção 2</option>
      <option value="opcao3">Opção 3</option>
    </select>
    <select id="lista1">
      <option value="">Lista de Entregas</option>
      <option value="opcao1">Opção 1</option>
      <option value="opcao2">Opção 2</option>
      <option value="opcao3">Opção 3</option>
    </select>
    <select id="lista1">
      <option value="">Pedidos</option>
      <option value="opcao1">Opção 1</option>
      <option value="opcao2">Opção 2</option>
      <option value="opcao3">Opção 3</option>
    </select>
  </body>
    <router-view />
    <OFooter />
  </div>
</template>

<script>
// import {} from '@/components/shared';

export default {
  components: {
    // OHeader,
    // OFooter,
  },
};
</script>

<style scoped></style>

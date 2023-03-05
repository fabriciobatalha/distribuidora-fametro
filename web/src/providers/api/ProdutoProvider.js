import BaseProvider from '@/providers/BaseProvider';

class ProdutoProvider extends BaseProvider {
  constructor() {
    super('api/produto');
  }

  async getAll() {
    return this.get(`${this.path}/`);
  }

  async saveProduto(data) {
    return this.post(`${this.path}/`, data);
  }
}

export const produtoProvider = new ProdutoProvider();

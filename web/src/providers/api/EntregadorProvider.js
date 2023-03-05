import BaseProvider from '@/providers/BaseProvider';

class EntregadorProvider extends BaseProvider {
  constructor() {
    super('api/entregador');
  }

  async getAll() {
    return this.get(`${this.path}/`);
  }

  async saveEntregador(data) {
    return this.post(`${this.path}/`, data);
  }
}

export const entregadorProvider = new EntregadorProvider();

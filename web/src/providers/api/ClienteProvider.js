import BaseProvider from '@/providers/BaseProvider';

class ClienteProvider extends BaseProvider {
  constructor() {
    super('api/clientes');
  }

  async getAll() {
    return this.get(`${this.path}/`);
  }

  async saveClient(data) {
    return this.post(`${this.path}/`, { ...data });
  }
}

export const clienteProvider = new ClienteProvider();

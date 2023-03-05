import BaseProvider from '@/providers/BaseProvider';

class ClienteProvider extends BaseProvider {
  constructor() {
    super('api/clientes');
  }

  async getAll() {
    return this.get(`${this.path}/`);
  }

  async save(data) {
    return this.post(`${this.path}/`, data);
  }

  async delete(data) {
    return this.delete(`${this.path}/${data}/`);
  }
}

export const clienteProvider = new ClienteProvider();

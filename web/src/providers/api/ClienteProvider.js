import BaseProvider from '@/providers/BaseProvider';

class ClienteProvider extends BaseProvider {
  constructor() {
    super('api/clientes');
  }

  async getAll(data) {
    return this.get(`${this.path}/`, data);
  }

  async save(data) {
    return this.post(`${this.path}/`, data);
  }

  async delete(data) {
    return this.delete(`${this.path}/${data}/`);
  }
}

export const clienteProvider = new ClienteProvider();

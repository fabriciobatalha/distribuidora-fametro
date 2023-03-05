import BaseProvider from '@/providers/BaseProvider';

class FuncionarioProvider extends BaseProvider {
  constructor() {
    super('api/funcionarios');
  }

  async getAll() {
    return this.get(`${this.path}/`);
  }

  async saveEmployer(data) {
    return this.post(`${this.path}/`, data);
  }
}

export const funcionarioProvider = new FuncionarioProvider();

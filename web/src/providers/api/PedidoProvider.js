import BaseProvider from '@/providers/BaseProvider';

class PedidoProvider extends BaseProvider {
  constructor() {
    super('api/pedidos');
  }

  async getAll() {
    return this.get(`${this.path}/`);
  }

  async savePedido(data) {
    return this.post(`${this.path}/`, data);
  }
}

export const pedidoProvider = new PedidoProvider();

import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class PrimeiroComponente extends LightningElement {
    
    async handleSucesso(event) {
        const itemId = event.detail.id;

        // Alerta customizado de Item Criado
        await LightningAlert.open({
            message: `Item registrado com sucesso no banco de dados dos Irmãos ANDRADE! O produto foi vinculado ao pedido de destino. (ID do Registro: ${itemId})`,
            theme: 'success',
            label: '🚀 Item Adicionado!',
        });
    }
}
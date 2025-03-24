export default class WhatsappService {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber.replace(/\D/g, '');
    }

    sendMessage(data) {
        const message = Object.entries(data)
            .map(([key, value]) => `*${this._formatKey(key)}:* ${value}`)
            .join('\n');

        const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(`*Nuevo formulario WEB enviado:*\n${message}`)}`;
        window.open(url, '_blank');
    }

    _formatKey(key) {
        return key.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase());
    }
}

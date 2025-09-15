// Simulación de proxy en red

class ServidorFinal {
    recibir(peticion, ipCliente) {
        return `Servidor recibió: "${peticion}" desde IP ${ipCliente}`;
    }
}

class ProxyRed {
    constructor(servidor) {
        this.servidor = servidor;
    }

    enviar(peticion) {
        // El proxy oculta la IP real y envía una "IP ficticia"
        const ipProxy = "192.168.100.1";
        return this.servidor.recibir(peticion, ipProxy);
    }
}

// Ejemplo de uso
const servidor = new ServidorFinal();
const proxy = new ProxyRed(servidor);

console.log(proxy.enviar("Conectar a la base de datos"));

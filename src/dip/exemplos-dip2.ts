// ------------------------------------------
// ❌ Sem DIP (Inversão de Dependência violado)
// ------------------------------------------

// Classe concreta para envio de Email
class Email {
  enviar(msg: string) {
    console.log('Email:', msg);
  }
}

// Classe de alto nível (Alerta)
// Problema: Ela depende diretamente da classe concreta Email.
class Alerta {
  constructor(private email: Email) {} // <-- dependência rígida

  enviarAlerta() {
    // Aqui o Alerta só consegue enviar emails.
    this.email.enviar('Atenção!');
  }
}

/*
Problema maior:
- Se você quiser enviar SMS, WhatsApp, Push Notification...
  você teria que alterar a classe Alerta.

Ou seja:
Alerta depende de um DETALHE (Email), violando o DIP.
*/


// ------------------------------------------
// ✔ Com DIP (correto, seguindo SOLID)
// ------------------------------------------

// Interface (abstração) que define o comportamento de um Notificador
interface Notificador {
  enviar(msg: string): void;
}

// Implementação concreta usando EMAIL
class Email2 implements Notificador {
  enviar(msg: string) {
    console.log('Email:', msg);
  }
}

// Outra implementação concreta usando SMS
class SMS implements Notificador {
  enviar(msg: string) {
    console.log('SMS:', msg);
  }
}

// Classe de alto nível
// Agora depende da ABSTRAÇÃO (Notificador), não da implementação.
// Isso permite troca de comportamento sem mudar o código interno.
class Alerta2 {
  constructor(private notificador: Notificador) {} // <-- agora está flexível

  enviarAlerta() {
    this.notificador.enviar('Atenção!');
  }
}

// Podemos escolher qual implementação injetar
const alerta2 = new Alerta2(new Email2());
// Se quiser enviar via SMS, basta trocar para:
// const alerta2 = new Alerta2(new SMS());

alerta2.enviarAlerta();

/*
Vantagens do DIP aqui:

✔ A classe Alerta2 não depende mais de Email ou SMS.
✔ Podemos adicionar novos canais de notificação sem mudar Alerta2.
✔ O código fica mais modular e flexível.
✔ Facilita testes, porque podemos criar Notificadores falsos (mock).
*/

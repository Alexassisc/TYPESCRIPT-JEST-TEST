/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

// ------------------------------------------
// ❌ ERRADO (sem DIP — Dependência de Implementação)
// ------------------------------------------

// Classe concreta representando uma lâmpada comum
class Lampada {
  ligar() {
    console.log('Lâmpada ligada');
  }
}

// O interruptor é um módulo de **alto nível**
// Mas aqui ele depende diretamente da classe **concreta** Lampada.
// Isso cria um acoplamento forte.
class Interruptor {
  constructor(private lampada: Lampada) {} // <-- Dependência fixa, rígida

  acionar() {
    // O interruptor só funciona com Lampada.
    // Se trocar a iluminação para LED, é obrigatório alterar esta classe.
    this.lampada.ligar();
  }
}

/*
📌 Problema explicado:
- Interruptor depende de Lampada (detalhe).
- Se quiser usar:
     → Luz LED
     → Luz inteligente Wi-Fi
     → Holofote
     → Lâmpada fluorescente
  Você é obrigado a modificar a classe Interruptor.

➡️ Isso viola o DIP:
   “Módulos de alto nível não devem depender de módulos de baixo nível.”
*/

// ------------------------------------------
// ✔ CORRETO (com DIP — Dependência de Abstração)
// ------------------------------------------

// Criamos uma abstração para o comportamento de iluminação.
// Qualquer coisa que possa ‘ligar’ deve implementar esta interface.
interface Iluminacao {
  ligar(): void;
}

// Implementação concreta usando lâmpada comum
class Lampada1 implements Iluminacao {
  ligar() {
    console.log('Lâmpada ligada');
  }
}

// Implementação concreta usando luz LED
class LuzLED implements Iluminacao {
  ligar() {
    console.log('Luz LED ligada');
  }
}

// Agora o Interruptor depende **da abstração Iluminacao**, não da implementação.
// Isso deixa o código flexível e fácil de trocar o tipo de luz.
class Interruptor1 {
  constructor(private luz: Iluminacao) {} // <-- Agora depende da interface

  acionar() {
    // Funciona com QUALQUER objeto que implemente Iluminacao
    this.luz.ligar();
  }
}

// No momento da criação, escolhemos qual luz queremos usar.
// Isso é Inversão de Dependência: o detalhe passa a depender da abstração.
const interruptor = new Interruptor1(new LuzLED());

// Ao acionar, estamos usando a luz LED.
// Se amanhã quisermos usar Lampada1, basta trocar na instanciação.
interruptor.acionar();

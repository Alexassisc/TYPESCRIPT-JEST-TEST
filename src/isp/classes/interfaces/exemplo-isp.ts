// -------------------------
// ❌ EXEMPLO SEM ISP (errado)
// -------------------------

// Interface gigante, obrigando TODO mundo a ter esses métodos
interface Animal {
  comer(): void;
  andar(): void;
  voar(): void;
}

// Classe Cachorro implementa a interface Animal
class Cachorro implements Animal {
  comer() {
    console.log('Cachorro comendo');
  }

  andar() {
    console.log('Cachorro andando');
  }

  voar() {
    // ❌ Problema: Cachorro NÃO VOA
    // Mesmo assim é obrigado a implementar
    throw new Error('Cachorros não voam!');
  }
}

// Esse é o tipo de erro que fere o ISP:
// Classes são obrigadas a implementar métodos que elas não usam.

// -------------------------
// ✔ EXEMPLO COM ISP (correto)
// -------------------------

// Interfaces pequenas, específicas e focadas:
interface Comedor {
  comer(): void;
}

interface Andador {
  andar(): void;
}

interface Voador {
  voar(): void;
}

// Agora cada classe implementa SOMENTE o que precisa

// Cachorro só come e anda — perfeito
class Cachorro2 implements Comedor, Andador {
  comer() {
    console.log('Cachorro comendo');
  }

  andar() {
    console.log('Cachorro andando');
  }
}

// Pássaro come, anda e também voa
class Passaro implements Comedor, Andador, Voador {
  comer() {
    console.log('Pássaro comendo');
  }

  andar() {
    console.log('Pássaro andando');
  }

  voar() {
    console.log('Pássaro voando');
  }
}

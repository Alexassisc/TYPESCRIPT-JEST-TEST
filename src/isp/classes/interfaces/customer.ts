import {
  CustomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  primeiroNome: string;
  ultimoNome: string;
  cpf: string;

  constructor(primeiroNome: string, ultimoNome: string, cpf: string) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.cpf = cpf;
  }
  getName(): string {
    return this.primeiroNome + ' ' + this.ultimoNome;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  constructor(
    public razaoSocial: string,
    public nomeFantasia: string,
    public cnpj: string,
    public inscEstadual?: string,
    public telefone?: string,
    public email?: string,
    public endereco?: string,
  ) {}
  getName(): string {
    return this.nomeFantasia;
  }
  getIDN(): string {
    return `
CNPJ: ${this.cnpj}
Razão Social: ${this.razaoSocial}
Telefone: ${this.telefone ?? '-'}
Inscrição Estadual: ${this.inscEstadual ?? '-'}
Endereço: ${this.endereco ?? '-'}
Email: ${this.email ?? '-'}
`.trim();
  }
}

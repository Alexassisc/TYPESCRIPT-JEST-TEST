export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  primeiroNome: string;
  ultimoNome: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  inscEstadual?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageUrl?: string;
  tag: string;
  features: string[];
  recommendedFor: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'servicos' | 'faturamento' | 'cobertura' | 'geral';
}

export interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  servico: string;
  mensagem: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  foundationYears: string;
  phonePrimary: string;
  phoneSecondary: string;
  phonePrimaryRaw: string;
  phoneSecondaryRaw: string;
  whatsappNumber: string;
  whatsappRaw: string;
  whatsappMessage: string;
  email: string;
  emailContact: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    full: string;
  };
  hours: string;
  coverageAreas: string[];
}

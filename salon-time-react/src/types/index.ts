// User types
export interface User {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  isLoggedIn?: boolean;
}

export interface Company {
  id: number;
  nome: string;
  cnpj: string;
  endereco?: string;
  numero?: string;
  cidade?: string;
  estado?: string;
  complemento?: string;
}

// Service types
export interface Service {
  id: number;
  nome: string;
  descricao: string;
  tempo: string;
  preco: number;
  mediaAvaliacao: number;
}

// Navigation types
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  isActive?: boolean;
}

// Form types
export interface LoginForm {
  email: string;
  senha: string;
}

export interface RegisterForm {
  nome_usuario: string;
  email_usuario: string;
  senha_usuario: string;
  confirmar_senha: string;
  nome_empresa: string;
  cnpj: string;
}

export interface ProfileForm {
  nome: string;
  email: string;
  telefone: string;
  endereco?: string;
  numero?: string;
  cidade?: string;
  estado?: string;
  complemento?: string;
}
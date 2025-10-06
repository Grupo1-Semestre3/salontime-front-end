// Navigation utility
export const navigate = (path: string) => {
  window.location.href = path;
};

// Format name utility
export const formatName = (value: string): string => {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Password validation
export const validatePassword = (password1: string, password2: string): boolean => {
  return password1 === password2;
};

// CPF formatting
export const formatCPF = (value: string): string => {
  const cpf = value.replace(/\D/g, "");
  
  if (cpf.length === 11) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  return cpf;
};

// Phone formatting
export const formatPhone = (value: string): string => {
  const phone = value.replace(/\D/g, "");
  
  if (phone.length === 11) {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (phone.length === 10) {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  return phone;
};

// Form validation for registration
export const validateRegistrationFields = (
  nome: string,
  telefone: string,
  email: string,
  senha: string,
  senhaConfirmar: string
): string | true => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome.length === 0 || nome.length > 50) {
    return "O nome deve ter entre 1 e 50 caracteres.";
  }

  if (telefone.length !== 0 && telefone.length !== 11) {
    return "O telefone deve conter exatamente 11 dígitos numéricos.";
  }

  if (!regexEmail.test(email)) {
    return "E-mail inválido.";
  }
  
  if (senha.length === 0 || senha.length > 30) {
    return "A senha deve ter entre 1 e 30 caracteres.";
  }

  if (senha !== senhaConfirmar) {
    return "As senhas não coincidem.";
  }
  
  return true;
};

// Star rating generation
export const generateStars = (rating: number): string[] => {
  const stars: string[] = [];
  const fullStars = Math.round(rating);
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push('filled');
    } else {
      stars.push('outline');
    }
  }
  
  return stars;
};
import Swal from 'sweetalert2';

export const showErrorMessage = (message: string) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    color: '#fff',
    background: '#1d1d1d',
    confirmButtonColor: '#4E2E9E',
  });
};

export const showSuccessMessage = (message: string) => {
  Swal.fire({
    title: message,
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
    color: '#fff',
    background: '#1d1d1d',
  });
};

export const showConfirmDialog = (
  title: string,
  text: string,
  confirmButtonText: string = 'Sim',
  cancelButtonText: string = 'Cancelar'
) => {
  return Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    color: '#fff',
    background: '#1d1d1d',
    confirmButtonColor: '#4E2E9E',
    cancelButtonColor: '#d33',
  });
};
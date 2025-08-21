// export function navegar(path) {
//     window.location.href = path;
// }

// // utils.js
export function formatarNomeInput(inputElement) {
  function nomeFormatado(value) {
    return value
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function formatarNome() {
    inputElement.value = nomeFormatado(inputElement.value);
  }

  inputElement.addEventListener("blur", handleFormat);
  inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      formatarNome();
    }
  });
}
// VARIABLES
let cantidad = document.querySelector("#cantidad");
let cantidadT = document.querySelector("#cantidadT");
let color = document.querySelector("#color");
let colorT = document.querySelector("#colorT");
let boton = document.querySelector("#boton");
const precio = 175990;
let precioT = document.querySelector("#precioT");

// EVENTO
boton.addEventListener("click", () => {
  cantidadT.innerHTML = `Cantidad: ${cantidad.value}`;
  colorT.style.color = color.value;
  precioT.innerHTML = `Total: $${Intl.NumberFormat().format(
    cantidad.value * precio
  )}`;
});

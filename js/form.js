document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "56962034897";

  let cliente = document.querySelector("#cliente").value;
  let RUT = document.querySelector("#RUT").value;
  let RUC = document.querySelector("#RUC").value;
  let fiscalia = document.querySelector("#fiscalia").value;
  let servicio = document.querySelector("#servicio").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=$56962034897&text=
		*_FISCALIA REGIONAL METROPOLITANA CENTRO NORTE_*%0A
		*Reservas*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*Ingresa tu rut*%0A
		${RUT}%0A
		*Indica el RUC causa*%0A
		${RUC}%0A
		*FISCALÍA ASIGNADA*%0A
		${fiscalia}%0A
		*¿Cuál es el servicio que se desea realizar?*%0A
		${servicio}`;

  if (cliente === "" || RUT === "" || RUC === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});

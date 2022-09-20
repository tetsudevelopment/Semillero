var app = new Vue({
  el: "#app",
  data() {
    return {
      option: "",
      currency: 0,
      dolar: 3779,
      euro: 4061,
    };
  },
  methods: {
    convert: function () {
      let result = "";
      if (this.option === "1") {
        let respuesta = parseFloat(this.currency) / parseFloat(this.dolar);
        respuesta = respuesta.toFixed(2);
        result = `Su valor del monto ${this.currency} en dólares es: ${respuesta}`;
      } else {
        let respuesta = parseFloat(this.currency) / parseFloat(this.euro);
        respuesta = respuesta.toFixed(2);
        result = `Su valor del monto ${this.currency} en euros es: ${respuesta}`;
      }
      alert(result);
    },
  },
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      num_1: 0,
      num_2: 0,
      rta: 0
    };
  },
  methods: {
    sumar: function () {
      num1 = parseInt(this.num_1);
      num2 = parseInt(this.num_2);
      const respuesta = num1 + num2;
      this.rta = respuesta;
      alert(`Resultado  ${this.rta}`);
    },
    restar: function () {
      num1 = parseInt(this.num_1);
      num2 = parseInt(this.num_2);
      const respuesta = num1 - num2;
      this.rta = respuesta;
      alert(`Resultado  ${this.rta}`);
    },
    multiplicar: function () {
      num1 = parseInt(this.num_1);
      num2 = parseInt(this.num_2);
      const respuesta = num1 * num2;
      this.rta = respuesta;
      alert(`Resultado  ${this.rta}`);
    },
    dividir: function () {
      num1 = parseInt(this.num_1);
      num2 = parseInt(this.num_2);
      if (num2 === 0) {
        alert("No se puede dividir por 0");
      } else {
        const respuesta = num1 / num2;
        this.rta = respuesta;
        alert(`Resultado  ${this.rta}`);
      }
    },
    limpiar: function () {
      this.num_1 = 0,
      this.num_2 = 0,
      this.rta=0  
    },
  },
});
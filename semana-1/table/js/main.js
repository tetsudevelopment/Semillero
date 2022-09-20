var app = new Vue({
  el: "#app",
  data() {
    return {
      data: [],
      name: "Brayan",
      age: "19",
      id: 0,
    };
  },

  methods: {
    agregar: function () {
      this.data.push({
        id: this.id++,
        name: this.name,
        age: this.age,
      });
    },
    deleteItem: function (index) {
      this.data.splice(index, 1);
      this.id--
    },
  },
});

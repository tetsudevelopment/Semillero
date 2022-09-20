var app = new Vue({
  el: "#app",
  data: {
    arrayProds: [
      { id: 1, name: "Manzana", amount: 1700, cant: 50 },
      { id: 2, name: "Pera", amount: 700, cant: 0 },
      { id: 3, name: "Mandarinas", amount: 200, cant: 150 },
    ],
    products: {
      name: "",
      price: "",
      amount: "",
    },
    newArrayProds: [],
  },
  methods: {
    listData() {
      this.newArrayProds = this.arrayProds;
    },
    addItem() {
      this.newArrayProds.push({
        id: this.newArrayProds.length + 1,
        name: this.products.name,
        price: this.products.price,
        amount: this.products.amount,
      });
      this.updateLocalStorage();
    },
    deleteItem(index) {
      this.newArrayProds.splice(index, 1);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("products", JSON.stringify(this.newArrayProds));
    },
  },
  created() {
    if (localStorage.getItem("products") !== null) {
      this.newArrayProds = JSON.parse(localStorage.getItem("products"));
    } else {
      this.listData();
    }
  },
  mounted() {
    this.$refs.name.focus();
  },
  computed: {},
});

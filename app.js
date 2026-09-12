const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(event) {
      this.confirmedName = this.name;
      event.target.blur();
    },
    submitForm(event) {
      // event.preventDefault();
    },
    setName(event) {
      this.name = event.target.value;
    },
    increaseCounter(num) {
      this.counter += num;
    },
    decreaseCounter(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');

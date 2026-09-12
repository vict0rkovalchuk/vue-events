const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
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

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter += 1;
    },
    decreaseCounter() {
      this.counter -= 1;
    }
  }
});

app.mount('#events');

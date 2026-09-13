const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   this.fullname = value ? `${value} ${this.lastName}` : '';
    // },
    // lastName(value) {
    //   this.fullname = value ? `${this.name} ${value}` : '';
    // }
  },
  computed: {
    fullname() {
      return this.name === '' || this.lastName === '' ? '' : `${this.name} ${this.lastName}`;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');

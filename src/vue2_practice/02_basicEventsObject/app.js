const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          this.counter = 0;
        }, 2000);
      }
    }
//    name(value) {
//      if (value === '') {
//        this.fullName = '';
//      }else {
//        this.fullName = value + ' ' + this.lastName;
//      }
//    },
//    lastName(value) {
//      if (value === '') {
//        this.fullName = '';
//      }else {
//        this.fullName = this.name + ' ' + value;
//      }
//    }
  },
  computed: {
    fullName() {
    console.log('A');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      console.log('B');
      return this.name + ' ' + 'Shin';
    },
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

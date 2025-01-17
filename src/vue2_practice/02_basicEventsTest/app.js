const app = Vue.createApp({
  data() {
    return {
      inputValue: '',
      enteredValue: '',
    }
  },
  methods: {
    showAlert() {
      alert("Hello~");
    },
    setInput(event) {
      this.inputValue = event.target.value;
    },
    setEnteredInput(event) {
      this.enteredValue = event.target.value;
    }
  }
});

app.mount('#assignment');
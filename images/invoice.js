const app = new  vue({
  el: "#app",
  data: {
    count: 7 * 24 * 60 * 60
  },
  created(){
    setInterval(() => {
      this.count = this.count - 1
      if (this.color === "black") {
        this.color = "red"
      }else {
        this.color = "black"
      }
    }, 1000)
  }
})

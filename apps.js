var app = new Vue({
  el:'#app',

  // <!-- =========== text filter =========== -->
  data: {
    message: 'Filter on VueJS'
  },
  filters:{
    big(value){
      if(!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
    small(value){
      if(!value) return ''
      value = value.toString()
      return value.toLowerCase()
    }
  }


})

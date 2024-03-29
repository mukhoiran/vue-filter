var app = new Vue({
  el:'#app',

  // <!-- =========== text filter =========== -->
  // data: {
  //   message: 'Filter on VueJS'
  // },
  // filters:{
  //   big(value){
  //     if(!value) return ''
  //     value = value.toString()
  //     return value.toUpperCase()
  //   },
  //   small(value){
  //     if(!value) return ''
  //     value = value.toString()
  //     return value.toLowerCase()
  //   }
  // }

  // <!-- =========== Flip word filter =========== -->
  // data: {
  //   message: 'Filter on VueJS'
  // },
  // filters:{
  //   reverse(value){
  //     if(!value) return ''
  //     value = value.toString()
  //     return value.split('').reverse().join('')
  //   },
  //   reverse2(value){
  //     if(!value) return ''
  //     value = value.toString()
  //     return value.split(' ').reverse().join(' ')
  //   }
  // }

  // <!-- =========== Cpitalize filter =========== -->
  data: {
    message: 'filter on VueJS'
  },
  filters:{
    capitalize(value){
      if(!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})

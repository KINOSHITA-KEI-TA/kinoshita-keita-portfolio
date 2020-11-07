new Vue({
  el: '#app',
  data: {
    showContent: false
  },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    }
  }
})




// new Vue({
//   el: '#app',

//   data(){
//     return {
//       isModalActive: false,
//     }
//   },
//   methods: {
//    /**
//    * clickイベントが発火されたタイミングで、 
//    * オーバーレイコンテンツを表示するフラグを持つdata(isModalActive)を切り替える
//    */
//     openItem() {
//       this.toggleModal();
//     },
//     /**
//     * active状態を切り替える。
//     */
//     toggleModal() {
//       this.isModalActive = ! this.isModalActive;
//     },
//   }
// });
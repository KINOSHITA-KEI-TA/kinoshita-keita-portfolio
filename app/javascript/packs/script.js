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

// Vue.component('open-modal',{
//   template : `
//   <div id="overlay" style="display: none;">
//     <div id="content">
//       <img alt="ポップアップ画像" height="300" src="/assets/popup.jpg" width="500" class="image-pop"> 
//       <button>×</button>
//     </div>
//   </div>
//     `,
//     methods :{
//     clickEvent: function(){
//       this.$emit('from-child')
//      }
//   }
// })



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
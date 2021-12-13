import iconfont from './public/iconfont/iconfont.css'
// import nprogress from 'nprogress'
export default ({ Vue, router }) => {
  Vue.mixin({
    mounted() {
      // 实现爱心特效
      import('./JSmodules/heart').then(function (m) {
        Vue.use(m.default)
    })
    },
  })
}
// 进度条效果
// export default ({ router }) => {
//   router.beforeEach((to, from, next) => {
//     nprogress.start()
//     next()
//   });
//   router.afterEach((to, from) => {
//     nprogress.done()
//   });
//   window.addEventListener('scroll', handleScroll);
//   function handleScroll() {
//     // 屏幕剩余的高度
//     let surplus = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     // let screenH = document.documentElement.clientHeight
//     // 当前滑动的高度
//     let scrollY = document.documentElement.scrollTop
//     let coorY = scrollY / surplus;
//     nprogress.set(coorY)
//   }
// }

// 鼠标单击文字效果
// function fnTextPopup(arr, options) {
//   // arr参数是必须的
//   if (!arr || !arr.length) {
//     return;
//   }
//   // 主逻辑
//   let index = 0;
//   function randomColor() {
//     return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
//   }
//   document.documentElement.addEventListener('click', function (event) {
//     let x = event.pageX, y = event.pageY;
//     let eleText = document.createElement('span');
//     eleText.className = 'text-popup text-c';
//     this.appendChild(eleText);
//     if (arr[index]) {
//       eleText.innerHTML = arr[index];
//     } else {
//       index = 0;
//       eleText.innerHTML = arr[0];
//     }
//     // 动画结束后删除自己
//     eleText.addEventListener('animationend', function () {
//       eleText.parentNode.removeChild(eleText);
//     });
//     // 位置
//     eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
//     eleText.style.top = (y - eleText.clientHeight) + 'px';
//     // index递增
//     index++;
//   });
// };
// let texts = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
// fnTextPopup(texts);
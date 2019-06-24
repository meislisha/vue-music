import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import Rank from 'components/rank/rank'
import SingerDetail from 'components/singer-detail/singer-detail'
Vue.use(Router)

// const Recommend = (resolve) => {
//     import('components/recommend/recommend').then((module) => {
//         resolve(module)
//       })
//   }
    
const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: './recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
     {
       path: '/search',
       component: Search
     },
      {
        path: '/recommend',
        component: Recommend
      },
       {
         path: '/singer',
         component: Singer,
         children:[
           {
             path:':id',
             component:SingerDetail
           }
         ]
       },
  ]
})

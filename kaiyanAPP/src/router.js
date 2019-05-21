import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/home-recommend",
      component: () => import("./views/Home.vue"),
      meta: {
        footShow: true // true隐藏，默认false显示
      },

      children: [
        {
          path: "/home-recommend",
          name: "home-recommend",
          component: () => import("./views/HomeRecommend.vue")
        },
        {
          path: "/home-discover",
          name: "home-discover",
          component: () => import("./views/HomeDiscover.vue")
        },
        {
          path: "/home-daily",
          name: "home-daily",
          component: () => import("./views/HomeDaily.vue")
        }
      ]
    },
    {
      path: "/community",
      name: "community",
      component: () => import("./views/Community.vue")
    },
    {
      path: "/inform",
      name: "inform",
      component: () => import("./views/Inform.vue")
    },
    {
      path: "/my",
      name: "my",
      component: () => import("./views/My.vue")
    },
    {
      path: "/particulars/:id",
      name: "particulars",
      component: () => import("./views/Particulars.vue"),
      meta: {
        navHide: true
      }
    },
    {
      path: "/video-category-details/:id",
      name: "video-category-details",
      redirect: "/video-category-details/:id/details-recommend",
      component: () => import("./views/VideoCategoryDetails.vue"),
      children: [
        {
          path: "/video-category-details/:id/details-recommend",
          name: "details-recommend",
          component: () => import("./views/DetailsRecommend.vue"),
          meta: {
            navHide: true
          }
        },
        {
          path: "/video-category-details/:id/details-square",
          name: "details-square",
          component: () => import("./views/DetailsSquare.vue"),
          meta: {
            navHide: true
          }
        }
      ]
    }
  ]
});

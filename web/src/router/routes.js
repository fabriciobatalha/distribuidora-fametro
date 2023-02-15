export const generalRoutes = {
  path: '/',
  component: ncmSmart,
  children: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'menu.home.title',
        breadcrumbs: [
          {
            text: 'Home',
            disabled: false,
            href: '/home',
          },
        ],
      },
      props: { routeGroup: 'isHomeMenuAndSidebar' },
      component: MenuPage,
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'menu.home.title',
        breadcrumbs: [
          {
            text: 'Home',
            disabled: false,
            href: '/home',
          },
        ],
      },
      props: { routeGroup: 'isHomeMenuAndSidebar' },
      component: MenuPage,
    },
  ],
};

const routes = [generalRoutes];

export default routes;

/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// import
// To be changed
// import Tables from "views/Dashboard/Tables.js";
import {
  CartIcon,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  StatsIcon,
} from "./components/Icons/Icons";
// import Calendar from "./views/Applications/Calendar";
// import DataTables from "./views/Applications/DataTables";
// import Kanban from "./views/Applications/Kanban.js";
// import Wizard from "./views/Applications/Wizard.js";
// import SignInBasic from "./views/Authentication/SignIn/SignInBasic.js";
// import SignInCover from "./views/Authentication/SignIn/SignInCover.js";
// import SignInIllustration from "./views/Authentication/SignIn/SignInIllustration.js";
// import SignUpBasic from "./views/Authentication/SignUp/SignUpBasic.js";
// import SignUpCover from "./views/Authentication/SignUp/SignUpCover.js";
// import SignUpIllustration from "./views/Authentication/SignUp/SignUpIllustration.js";
// import CRM from "./views/Dashboard/CRM.js";
import Default from "./views/Dashboard/Default.js";
import AboutUs from "./views/Dashboard/Aboutus";
// import OrderDetails from "views/Ecommerce/Orders/OrderDetails";
// import OrderList from "views/Ecommerce/Orders/OrderList";
// import EditProduct from "views/Ecommerce/Products/EditProduct";
// import NewProduct from "views/Ecommerce/Products/NewProduct";
// import ProductPage from "views/Ecommerce/Products/ProductPage";
// import Billing from "views/Pages/Account/Billing.js";
// import Invoice from "views/Pages/Account/Invoice.js";
// import Settings from "views/Pages/Account/Settings.js";
// import Alerts from "views/Pages/Alerts";
// import Charts from "views/Pages/Charts.js";
// import Pricing from "views/Pages/Pricing.js";
// import Overview from "views/Pages/Profile/Overview.js";
// import Projects from "views/Pages/Profile/Projects.js";
// import Teams from "views/Pages/Profile/Teams.js";
// import General from "views/Pages/Projects/General.js";
// import Timeline from "views/Pages/Projects/Timeline.js";
// import RTLPage from "views/Pages/RTLPage.js";
// import NewUser from "views/Pages/Users/NewUser.js";
// import Reports from "views/Pages/Users/Reports.js";
// import Widgets from "views/Pages/Widgets.js";
import MarketPlace from "./views/Dashboard/Marketplace";
import MapHome from "./views/Dashboard/MapHome";
import NFTMap from "./views/Dashboard/NFTMap";



const dashRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon color="inherit" />,
    authIcon: <HomeIcon color="inherit" />,
    collapse: true,
    items: [
      {
        name: "Home",
        path: "/dashboard/default",
        component: Default,
        layout: "/admin",
      },
      {
        name: "Map",
        path: "/dashboard/HomeMap",
        component: MapHome,
        layout: "/admin",
      },
      {
        name: "NFTMap",
        path: "/dashboard/NFTMap",
        component: NFTMap,
        layout: "/admin",
      },
      {
        name: "MarketPlace",
        path: "/dashboard/marketplace",
        component: MarketPlace,
        layout: "/admin",
      },
      {
        name: "Catalogue",
        path: "/dashboard/crm",
        component: MarketPlace,
        layout: "/admin",
      },
      {
        name: "About Us",
        path: "/dashboard/aboutus",
        component: AboutUs,
        layout: "/admin",
      },      
      // {
      //   name: "About Us",
      //   path: "/dashboard/aboutus",
      //   component: AboutUs,
      //   layout: "/admin",
      // },
    ],
  },
  // {
  //   name: "PAGES",
  //   category: "pages",
  //   items: [
  //     {
  //       name: "Maps",
  //       path: "/pages",
  //       collapse: true,
  //       icon: <DocumentIcon color="inherit" />,
  //       items: [
  //         {
  //           name: "Profile",
  //           path: "/profile",
  //           collapse: true,
  //           authIcon: <HomeIcon color="inherit" />,
  //           items: [
  //             {
  //               name: "Home",
  //               secondaryNavbar: true,
  //               path: "/pages/profile/overview",
  //               component: Overview,
  //               layout: "/admin",
  //             },
  //             {
  //               name: "Contact Us",
  //               secondaryNavbar: true,
  //               path: "/pages/profile/teams",
  //               component: Teams,
  //               layout: "/admin",
  //             },
  //             {
  //               name: "Market Place",
  //               secondaryNavbar: true,
  //               path: "/pages/profile/profile-projects",
  //               component: Projects,
  //               layout: "/admin",
  //             },
  //           ],
  //         },
  //       ],
  //     }   
  //   ],
  // },
];

export default dashRoutes;

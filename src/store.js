// store.js
import { reactive } from "vue";

export const store = reactive({
  appName: "Dashbool",
  user: "Mario Rossi",
  links: [
    {
      title: "Home",
      sublinks: ["Dashboard", "Dashboard 1", "Dashboard 2"],
      iconClass: "fa-home",
    },
    {
      title: "Maps",
      sublinks: ["Maps", "Maps 1", "Maps 2"],
      iconClass: "fa-map",
    },
    {
      title: "Config",
      sublinks: ["Config", "Config 1", "Config 2"],
      iconClass: "fa-gear",
    },
    {
      title: "Contacts",
      sublinks: ["Contacts", "Contacts 1", "Contacts 2"],
      iconClass: "fa-envelope",
    },
  ],
  api: {
    baseUrl: "http://localhost:3000/",
    monthlyConnections: "MonthlyConnections",
    userAgeRange: "UsersAgeRange",
    devices: "Devices",
  },
});

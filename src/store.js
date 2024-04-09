// store.js
import { reactive } from "vue";

export const store = reactive({
  appName: "Dashbool",
  user: "Mario Rossi",
  pages: ["Home", "Maps", "Config", "Contacts"],
});

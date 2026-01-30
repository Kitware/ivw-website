import DefaultTheme from "vitepress/theme-without-fonts";
import CustomLayout from "./components/CustomLayout.vue";

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
};

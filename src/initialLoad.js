import renderHome from "./home";
import renderNavBar from "./navbar";

export default function initialLoad() {
  renderNavBar();
  renderHome();
}

// import { Space } from "antd";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/content";
import SideMenu from "./components/sideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <Content></Content>
      </div>
      <Footer />
    </div>
  );
}
export default App;
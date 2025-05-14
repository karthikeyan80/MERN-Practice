import Add from "./components/add";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import IconComponent from "./components/IconComponent";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import ProfileCard from "./components/ProfileCard";
import StyleCard from "./components/StyleCard";
import UserList from "./components/UserList";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <div>
      {/* <Weather temp={22} />
      <UserStatus loggedIn = {false}
     isAdmin = {true} />
     <Greeting timeOfDay = "morning"/> */}
    {/* <Greet />
    <ProductInfo />
    <UserList />
    <ProductList /> */}
   {/*  <Add />
    <Header></Header>
    <MainContent />
    <Footer />
    <WelcomeMessage />
      <JSXRules /> */}
      {/* <Product />
       */}
       <StyleCard />
       <ProfileCard />
       <IconComponent />
    </div>
  );
};

export default App;

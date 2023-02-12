import './App.css';
import NavBar from './components/Header/nav';
import Home from './components/Home-page/home';
import SignUp from './components/Form/Sign-up Form/sign-up';
import SignIn from './components/Form/Sign-In-Form/sign-in';
import Services from './components/Home-page/Services/services';
import ServiceProvider from './components/Service-provider/service-provider';
import WorkerProfile from './components/Worker-Profile/worker-profile';
import Complain from './components/Home-page/Complain/complain';
import OrderHistory from './components/Order-History/order-history';
import WorkerComplain from './components/worker-complain-page/worker-complain';
import Footer from './components/Footer/footer';
import AboutUs from './components/About-Us-page/about-us';
import ClientProfile from './components/Client-profile-page/client-profile';
import ConsultantProfile from './components/Consultant-profile-page/consultant-profile';
import Chat from './components/Worker-Profile/Chating/chat'
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
   
          <Switch>
              <Route exact path='/'>
                  <Home></Home>
              </Route>
              <Route exact path='/AllService'>
                  <Services></Services>  
              </Route>
              <Route exact path='/ServiceProvider/:id'>
                  <ServiceProvider></ServiceProvider>
              </Route>
              <Route exact path='/WorkerProfile'>
                  <WorkerProfile></WorkerProfile>
              </Route>
              <Route exact path='/Client-profile'>
                     <ClientProfile></ClientProfile>
              </Route>
              <Route exact path='/ConsultantProfile'>
                    <ConsultantProfile></ConsultantProfile>
              </Route>
              <Route exact path='/SignUp'>
                    <SignUp></SignUp>
              </Route>
              <Route exact path='/SignIn'>
                    <SignIn></SignIn>
              </Route>
              <Route exact path='/Complain'>
                    <Complain></Complain>
              </Route>
              <Route exact path='/ContactUS'>
                    <Complain></Complain>
              </Route>
              <Route exact path='/WorkerContactUS'>
                    <WorkerComplain></WorkerComplain>
              </Route>
              <Route exact path='/AboutUS'>
                    <AboutUs></AboutUs>
              </Route>
              <Route exact path='/OrderHistory'>
                    <OrderHistory></OrderHistory>
              </Route>
              <Route exact path='/Chat'>
                  <Chat></Chat>
              </Route>
           </Switch> 
       <Footer></Footer>    
    </div>
  );
}
export default App;

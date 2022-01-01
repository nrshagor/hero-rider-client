import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorPage from './Page/Error/ErrorPage';
import Home from './Page/Home/Home/Home';
import Footer from './Page/Share/Footer/Footer';
import Navigation from './Page/Share/Navigation/Navigation';
import AddProducts from './Page/AddProducts/AddProducts';

import Login from './Page/LoginAndRegistration/Login/Login';
import Registration from './Page/LoginAndRegistration/Registration/Registration';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';
import Deshbord from './Page/Dashboard/Dashboard/Deshbord';
import MakeAdmin from './Page/Dashboard/MakeAdmin/MakeAdmin';
import MyOrder from './Page/Dashboard/MyOrder/MyOrder';
import EditProduct from './Page/Dashboard/EditProduct/EditProduct';
import Alhouse from './Page/HousList/AllHouse/Alhouse';
import SingleHouse from './Page/HousList/SingleHouse/SingleHouse';
import Learner from './Page/LoginAndRegistration/Registration/Learner';
import CarPakeg from './Page/LessonPakeg/CarPakeg';
import BikePakeg from './Page/LessonPakeg/BikePakeg';
import Payment from './Page/LessonPakeg/Payment';
import Payment1 from './Page/LessonPakeg/Payment1';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/singlehouse/:id" element={<SingleHouse />} />


            <Route
              path="/allhouse"
              element={
                <PrivateRoute>
                  <Alhouse />
                </PrivateRoute>
              }
            />


            <Route exact path="/payments" element={<Payment />} />
            <Route exact path="/payments1" element={<Payment1 />} />
            <Route exact path="/carpekage" element={<CarPakeg />} />
            <Route exact path="/bikepakege" element={<BikePakeg />} />
            <Route exact path="/login" element={<Login />} />

            <Route path="/dashbord" element={<Deshbord />}>

              <Route path="myorder" element={<MyOrder />} />
              <Route path="makeAdmin" element={<MakeAdmin />} />
              <Route path="addProduct" element={<AddProducts />} />
              <Route path="editProduct" element={<EditProduct />} />
            </Route>
            <Route exact path="/registerd" element={<Registration />} />
            <Route exact path="/learner" element={<Learner />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

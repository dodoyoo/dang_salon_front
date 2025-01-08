import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
// import StoreList from "./src/"
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
// import MyPage from "./pages/MyPage";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/store/:id" element={<StorePage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
        {/* <Route path="/my-page" element={<MyPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;

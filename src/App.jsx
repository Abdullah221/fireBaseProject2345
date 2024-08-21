import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Form/SignIn';
import SignUp from './Form/SignUp';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProgramPage from './components/pages/ProgramPage';
import NavBar from './components/NavBar';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import EnrollForm from './components/EnrollForm';
import Home from './components/Home';
import ClientPage from './components/pages/ClientPage'; // New route for viewing client profile


function App() {
  return (
    <div className="main-content">
      <Router>
        <NavBar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Client-related Routes */}
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/:id" element={<ClientPage />} /> 
          <Route path="/add-client" element={<ClientForm />} /> 
          {/* <Route path="/edit-client/:id" element={<EditClientForm />} />  */}

          {/* Other Routes */}
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/enroll" element={<EnrollForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

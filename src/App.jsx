import { useContext } from "react";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
/* -------------------------------- COONTEXT -------------------------------- */
import { AuthContext } from "./context/AuthContext";
import Alert from "./pages/alert/Alert";
import ItemSignInContainer from "./pages/credentials/ItemSignInContainer";
import File from "./pages/file/File";
import Home from "./pages/home/Home";
import Patiente from "./pages/patient/Patiente";
import ViewFile from "./pages/viewFile/ViewFile";


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/login' />
  }

  return children
}

const ProtectedPriorityRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user || user.rol === 'patient') {
    return <Navigate to='/patient' />
  }

  return children
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<ItemSignInContainer />} />
          <Route path="/" element={
            <ProtectedPriorityRoute>
              <Home />
            </ProtectedPriorityRoute>
          } />
          <Route path="/file/:id" element={
            <ProtectedPriorityRoute>
              <File />
            </ProtectedPriorityRoute>
          } />
          <Route path="/fileview/:id" element={
            <ProtectedPriorityRoute>
              <ViewFile />
            </ProtectedPriorityRoute>
          } />
          <Route path="/patient" element={
            <ProtectedRoute>
              <Patiente />
            </ProtectedRoute>
          } />

          <Route path="/alert" element={
            <ProtectedRoute>
              <Alert />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

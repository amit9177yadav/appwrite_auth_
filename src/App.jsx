import Login  from "./Pages/Login";
import  Home  from "./Pages/Home";
import { UserProvider, useUser } from "./lib/Context/UserProvider";
import './index.css'

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <Navbar />
        <main>{isLoginPage ? <Login /> : <Home />}</main>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav>
      <a href="/" className="idea-tracker">Idea tracker</a>
      <div className="navbar-right">
        {user.current ? (
          <>
            <span className="user-email">{user.current.email}</span>
            <button type="button" className="user-logoutbtn" onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}

export default App;

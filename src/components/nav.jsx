import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";

import { useSelector } from "react-redux";
import Users from "./user"
const Nav = () => {
  //const classes = useStyles();
  const login = useSelector((state) => state.login);
  console.log(login);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              padding: "5px",
            }}
          >
            LMS
          </Typography>
          <Button color="inherit" component={NavLink} to="/home">
            Home
          </Button>
          {login.loggedIn && login.role == "admin" && (
            <Button color="inherit" component={NavLink} to="/author">
              Authors
            </Button>
          )}
           {login.loggedIn && login.role == "admin" &&(
            <Button  color="inherit" component={NavLink} to="/publisher">Publisher
            </Button>
          )}
          <Button color="inherit" component={NavLink} to="/books">
            Books
          </Button>
          {/*   <Button color="inherit" component={NavLink} to="/users">
            Users
          </Button> */}
          {login.loggedIn && login.role == "admin" && (
            <Button
              color="inherit"
              style={{ marginRight: "auto" }}
              component={NavLink}
              to="/users"
            >
              Users
            </Button>
          )}
          {login.loggedIn ? (
            <Button color="inherit" component={NavLink} to="/logout">
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
          )}
          {/* <Button color="inherit" component={NavLink} to="/register">
            Register
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;


/*<Button href="/home" color="inherit">Home</Button>
<Button href="/publisher" color="inherit">Publisher</Button>
<Button href="/author" color="inherit">Author</Button>
<Button href="/bookissued" color="inherit">Bookissued</Button>
<Button href="/books" color="inherit">Books</Button>
<Button href="/booksorder" color="inherit">BooksOrder</Button>
<Button href="/damagedbook" color="inherit">DamagedBooks</Button>
<Button href="/readers" color="inherit">Readers</Button>
<Button href="/users" color="inherit">User</Button>
<Button href="/bookreturn" color="inherit">BookReturn</Button>
<Button href="/login" color="inherit">Login</Button>*/
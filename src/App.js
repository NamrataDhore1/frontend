import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Publishers from './components/publisher';
import AddPublisher from './components/addpublisher';
import UpdatePublisher from './components/updatepublishers';
import MenuAppBar from './components/nav';
import Home from './components/home';
import Author from './components/author';
import AuthorAdd from './components/addauthor';
import UpdateAuthor from './components/updateauthor';
import Bookissued from './components/bookissued';
import BookIssuedForm from './components/addissuedbook';
import UpdateIssuedBook from './components/updateissuedbook';
import Books from './components/books';
import BooksForm from './components/addbooks';
import UpdateBooks from './components/updatebooks';
import BooksOrder from './components/booksorder';
import AddOrder from './components/addorder';
import UpdateOrder from './components/updateorder';
import DamagedBooks from './components/damagedbooks';
import AddDamagedBooks from './components/adddamagedbooks';
import UpdateDamaged from './components/updatedamagedbook';
import Readers from './components/readers';
import AddReaders from './components/addreaders';
import UpdateReaders from './components/updatereaders';
import Users from './components/user';
import AddUsers from './components/addusers';
import UpdateUsers from './components/updateusers';
import BooksReturn from './components/bookreturn';
import ReturnBookForm from './components/addreturnbook';
import UpdateReturn from './components/updatereturnbook';
import Logout from './components/logout';
import Login from "./components/login";
function App() {
  return (
    <div className="App">
     <MenuAppBar/>
       <Switch>
       <Route path="/login" component={Login} />
       <Route  path="/users/update/:userid" component={UpdateUsers}/>
       <Route exact path="/readers/update/:id" component={UpdateReaders} />
       <Route path="/bookreturn/update/:id" component={UpdateReturn}/>
       <Route path="/damagedbook/update/:id" component={UpdateDamaged}/>
       <Route path="/booksorder/update/:orderId" component={UpdateOrder}/>
       <Route path="/author/add" component ={AuthorAdd}/>
       <Route path="/authors/update/:authorId" component={UpdateAuthor}/>
       <Route path="/publisher/add" component={AddPublisher}/>
      <Route path="/publishers/update/:id" component={UpdatePublisher}/>
      <Route path="/home" component={Home}/>
      <Route path="/readers/add" component={AddReaders} />
      <Route path="/publisher" component={Publishers}/>
      <Route path="/author" component ={Author}/>
      <Route path="/bookissued/add" component={BookIssuedForm}/>
      <Route path="/bookissued" component={Bookissued}/>
      <Route path="/booksissued/update/:issueId" component={UpdateIssuedBook}/>
      <Route path="/lms/viewAllBooks/add"  component={BooksForm} />
      <Route path="/books" component={Books}/>
      <Route path="/book/update/:bookid" component={UpdateBooks}/>
      <Route path="/lms/viewOrderList/add" component={AddOrder} />
      <Route path="/booksorder" component={BooksOrder} />
      <Route path="/lms/viewDamagedBooksList/add" component={AddDamagedBooks} />
      <Route path="/damagedbook" component={DamagedBooks} />
      <Route path="/readers" component={Readers} />
      <Route path="/users/addusers" component={AddUsers}/>
      <Route path="/users" component={Users} />
      <Route path="/bookreturn" component={BooksReturn} />
      <Route path="/lms/viewbooklist/add" component={ReturnBookForm} />
      <Route path="/logout" component={Logout} />

     
      </Switch>
    </div>
  );
}

export default App;

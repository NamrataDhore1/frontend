import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Books extends React.Component {
  state = {
    books: [],
    
  };
  componentDidMount() {
    axios
      .get("http://localhost:8081/lms/viewAllBooks")
      .then((response) => {
        console.log(response);
        this.setState({ books: response.data });
      })
      .catch((error) => console.log(error));
  }
  handleDelete = (id) => {
    axios.delete(`http://localhost:8081/lms/removeBook/${id}`).then((res) => {
      const books = this.state.books.filter((au) => au.bookid != id);
      this.setState({ books: books });
    });
  };
  render() {
    return (
      <div className = "container">
        <Link to="/lms/viewAllBooks/add" className="btn btn-secondary btn-large mt-3 float-end">
          Add
        </Link>
        <h1>Books Page</h1>
        <table className="table w-75 mx-auto mt-5">
          <thead>
            <tr>
              <th>BookId</th>
              <th>Book Title</th>
              <th>ISBN Code</th>
              <th>Subject</th>
              <th>Shelf Details</th>
              <th>Published Year</th>
              <th>Quantity</th>
              <th>Book Cost</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr>
                <td>{book.bookid}</td>
                <td>{book.title}</td>
                <td>{book.isbncode}</td>
                <td>{book.subject}</td>
                <td>{book.shelfdetails}</td>
                <td>{book.publishedyear}</td>
                <td>{book.quantity}</td>
                <td>{book.bookcost}</td>
              
                <td>
                <Link to={`/book/update/${book.bookid}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(book.bookid)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Books;
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Author extends React.Component {
    state={
        authors:[],
    };
    componentDidMount(){
        axios.get("http://localhost:8081/lms/viewAuthor").then((response)=>{
            console.log(response);
            this.setState({authors:response.data});
        })
        .catch((error)=>console.log(error));
    }
    /*handleDelete=(authorId)=>{
        axios.delete('http://localhost:8081/lms/deleteAuthor/${authorId}').then((res)=>{
            const authors = this.state.authors.filter((thor)=>thor.authorId!=authorId);
            this.setState({authors:authors});
        });
    };*/
    handleDelete = (authorid) => {
      axios.delete(`http://localhost:8081/lms/deleteAuthor/${authorid}`).then((res) => {
        const authors = this.state.authors.filter((std) => std.authorId != authorid);
        this.setState({ authors:authors });
      });
    };
    render() { 
        return (
            <div className="container">
              <h1>Author Section</h1>
              <Link
                to="/author/add"
                className="btn btn-outline-info btn-large mb-1 float-end"
              >
                Add
              </Link>
              <table className="table table-info table-striped">
                <thead>
                  <tr>
                    <th>author_id</th>
                    <th>contactno</th>
                    <th>email</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.authors.map((author) => (
                    <tr>
                      <td>{author.authorId}</td>
                      <td>{author.contactno}</td>
                      <td>{author.email}</td>
                      <td>{author.firstName}</td>
                      <td>{author.lastName}</td>
                      <td>
                      <Link to={`/authors/update/${author.authorId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-primary me-2"
                    />
                  </Link>
                        <input
                          type="button"
                          value="Delete"
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(author.authorId)}
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

 
export default Author;
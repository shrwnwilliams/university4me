import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchByCity from "../../components/SearchByCity";
import SearchByStates from "../../components/SearchByStates";
import SearchByDistance from "../../components/SearchByDistance";
// import SearchResults from "../components/SearchResults";
import { Accordion, Button, Card } from "react-bootstrap";
import CollegeCard from "../../components/CollegeCard";
import ReactPaginate from "react-paginate";
import e from "cors";
import "./style.css";

class Search extends Component {
  state = {
    search: "",
    cities: [],
    states: [],
    distance: "",
    zipcode: "",
    colleges: [],
    results: [],
    error: "",
    page: 0,
    resultPerPage: 30,
    pageCount: 0,
    lastSearch: "",
  };

  // componentDidMount() {
  //   API.getAll()
  //     .then((res) => {
  //       console.log(res.data.metadata.total);
  //       this.setState({ colleges: res.data.results, pageCount: Math.ceil(res.data.metadata.total / this.state.resultPerPage) });
  //     })
  //     .catch((err) => console.log(err));
  // }

  // SearchByName -- of college
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  // switch case to get all of the info
  getByName() {
    this.setState({ ...this.state, lastSearch: "name" });
    API.getByName(this.state.search, this.state.page)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        // console.log(res.data);
        this.setState({
          results: res.data.results,
          error: "",
          pageCount: Math.ceil(
            res.data.metadata.total / this.state.resultPerPage
          ),
        });
        console.log(this.state.results);
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getByName();
  };

  // SearchByStates
  handleInputChangeForStates = (event) => {
    this.setState({ search: event.target.value });
  };

  getByState() {
    this.setState({ ...this.state, lastSearch: "state" });
    API.getByState(this.state.search, this.state.page)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({
          results: res.data.results,
          error: "",
          pageCount: Math.ceil(
            res.data.metadata.total / this.state.resultPerPage
          ),
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  handleFormSubmitForStates = (event) => {
    event.preventDefault();
    this.getByState();
  };

  // SearchByCity
  handleInputChangeForCity = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitForCity = (event) => {
    event.preventDefault();
    API.getByCity(this.state.search, this.state.page)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({
          results: res.data.results,
          error: "",
          pageCount: Math.ceil(
            res.data.metadata.total / this.state.resultPerPage
          ),
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  // SearchByDistance and Zipcode
  handleInputChangeForDist = (event) => {
    this.setState({ distance: event.target.value });
  };

  handleInputChangeForZip = (event) => {
    this.setState({ zipcode: event.target.value });
  };

  handleFormSubmitForDist = (event) => {
    event.preventDefault();
    API.getByDistance(this.state.zipcode, this.state.distance, this.state.page)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({
          results: res.data.results,
          error: "",
          pageCount: Math.ceil(
            res.data.metadata.total / this.state.resultPerPage
          ),
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  // scrollToTop = function(){
  //   window.scrollTo(0,0)
  // }

  handleNamePageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      // window.scrollTo(0,0);
      this.getByName();
      // this.scrollToTop();
    });
  };

  handleStatePageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      // window.scrollTo(0,0);
      this.getByState();
      // this.scrollToTop();
    });
  };

  render() {
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <h2 className="mb-0">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Search by College Name
                </Accordion.Toggle>
              </h2>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <Container style={{ minHeight: "80%" }}>
                    <SearchForm
                      handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      colleges={this.state.colleges}
                    />
                  </Container>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header id="headingOne">
              <h2 className="mb-0">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Search College by State
                </Accordion.Toggle>
              </h2>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div>
                  <Container style={{ minHeight: "80%" }}>
                    <SearchByStates
                      handleFormSubmitForStates={this.handleFormSubmitForStates}
                      handleInputChangeForStates={
                        this.handleInputChangeForStates
                      }
                      states={this.state.states}
                    />
                  </Container>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header id="headingOne">
              <h2 className="mb-0">
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Search College by City
                </Accordion.Toggle>
              </h2>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div>
                  <Container style={{ minHeight: "80%" }}>
                    <SearchByCity
                      handleFormSubmitForCity={this.handleFormSubmitForCity}
                      handleInputChangeForCity={this.handleInputChangeForCity}
                      cities={this.state.cities}
                    />
                  </Container>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header id="headingOne">
              <h2 className="mb-0">
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Search College by Distance
                </Accordion.Toggle>
              </h2>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div>
                  <Container style={{ minHeight: "80%" }}>
                    <SearchByDistance
                      handleFormSubmitForDist={this.handleFormSubmitForDist}
                      handleInputChangeForDist={this.handleInputChangeForDist}
                      handleInputChangeForZip={this.handleInputChangeForZip}
                      distance={this.state.distance}
                      zipcode={this.state.zipcode}
                    />
                  </Container>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <CollegeCard colleges={this.state.results} />
          {this.state.lastSearch === "name" ? (
            <ReactPaginate
              previousLabel={"<-"}
              nextLabel={"->"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handleNamePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          ) : (
            <></>
          )}
          {this.state.lastSearch === "state" ? (
            <ReactPaginate
              previousLabel={"<-"}
              nextLabel={"->"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handleStatePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          ) : (
            <></>
          )}
        </Accordion>
      </div>
    );
  }
}

export default Search;

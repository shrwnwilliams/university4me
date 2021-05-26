import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchByCity from "../../components/SearchByCity";
import SearchByStates from "../../components/SearchByStates";
// import SearchResults from "../components/SearchResults";
import { Accordion, Button, Card } from "react-bootstrap";

class Search extends Component {
  state = {
    search: "",
    cities: [],
    states: [],
    colleges: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getAll()
      .then((res) => {
        console.log(res.data);
        this.setState({ colleges: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  // SearchByName -- of college
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getByName(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  // SearchByStates
  handleInputChangeForStates = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitForStates = (event) => {
    event.preventDefault();
    API.getByState(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  // SearchByCity
  handleInputChangeForCity = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitForCity = (event) => {
    event.preventDefault();
    API.getByCity(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      // <div>
      //   <Container style={{ minHeight: "80%" }}>
      //     <h1 className="text-center">Search University</h1>
      //     <SearchForm
      //       handleFormSubmit={this.handleFormSubmit}
      //       handleInputChange={this.handleInputChange}
      //       colleges={this.state.colleges}
      //     />
      //     <SearchByStates
      //       handleFormSubmit={this.handleFormSubmitForStates}
      //       handleInputChange={this.handleInputChangeForStates}
      //       states={this.state.states}
      //     />
      //   </Container>
      // </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header id="headingOne">
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
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Search College by State
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByStates
                    handleFormSubmit={this.handleFormSubmitForStates}
                    handleInputChange={this.handleInputChangeForStates}
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
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Search College by City
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
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
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Search College by Zipcode
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByDistance
                    handleFormSubmitForDist={this.handleFormSubmitForDist}
                    handleInputChangeForDist={this.handleInputChangeForDist}
                    distance={this.state.distance}
                  />
                </Container>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default Search;

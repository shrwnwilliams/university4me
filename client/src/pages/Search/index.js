import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchByCity from "../../components/SearchByCity";
import SearchByStates from "../../components/SearchByStates";
import SearchByDistance from "../../components/SearchByDistance";
import { Accordion, Button, Card } from "react-bootstrap";
import CollegeCard from "../../components/CollegeCard";
import ReactPaginate from "react-paginate";
import e from "cors";
import "./style.css";

// reset pagination on new search
// if state.lastsearch !== "last search"
// set state to 0
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
    satEng: 650,
    satMath: 650,
    satRead: 650,
    actEng: 30,
    actMath: 30,
    actWrite: 30,
    actCumulative: 30,
  };

  // componentDidMount() {
  //   var getUser = JSON.parse(localStorage.getItem("profile"));
  //   var username = getUser.result.username;
  //   API.getUserInfo(username).then((res) => {
  //     console.log(res.data);
  //     this.setState({
  //       satEng: res.data.sat[0].writing,
  //       satMath: res.data.sat[0].math,
  //       satRead: res.data.sat[0].english,
  //       actEng: res.data.act[0].english,
  //       actMath: res.data.act[0].math,
  //       actWrite: res.data.act[0].writing,
  //       actCumulative: res.data.act[0].cumulative
  //     })
  //     console.log(this.state)
  //   })

  // }

  // Get by name
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  getByName() {
    if (this.state.lastSearch !== "name"){
      this.setState({...this.state, page: 0})
    }
    this.setState({ ...this.state, lastSearch: "name" });
    API.getByName(this.state.search, this.state.page)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
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

  filterNameResultsSat = () => {
    this.setState({ ...this.state, lastSearch: "name" });
    API.getByName(this.state.search, this.state.page).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[9] || values[10] || values[11] !== null) {
          if (
            values[9] <= this.state.satRead &&
            values[10] <= this.state.satMath &&
            values[11] <= this.state.satEng
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };

  filterNameResultsAct = () => {
    this.setState({ ...this.state, lastSearch: "name" });
    API.getByName(this.state.search, this.state.page).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[5] || values[6] || values[7] || values[8] !== null) {
          if (
            values[5] <= this.state.actCumulative &&
            values[6] <= this.state.actEng &&
            values[7] <= this.state.actMath &&
            values[8] <= this.state.actWrite
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getByName();
  };

  handleNameFilterSubmitSat = (event) => {
    event.preventDefault();
    this.filterNameResultsSat();
  };

  handleNameFilterSubmitAct = (event) => {
    event.preventDefault();
    this.filterNameResultsAct();
  };

  handleNamePageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      this.getByName();
    });
  };

  // Search By State
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

  filterStateResultsSat = () => {
    this.setState({ ...this.state, lastSearch: "state" });
    API.getByState(this.state.search, this.state.page).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[9] || values[10] || values[11] !== null) {
          if (
            values[9] <= this.state.satRead &&
            values[10] <= this.state.satMath &&
            values[11] <= this.state.satEng
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };

  filterStateResultsAct = () => {
    this.setState({ ...this.state, lastSearch: "state" });
    API.getByState(this.state.search, this.state.page).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[5] || values[6] || values[7] || values[8] !== null) {
          if (
            values[5] <= this.state.actCumulative &&
            values[6] <= this.state.actEng &&
            values[7] <= this.state.actMath &&
            values[8] <= this.state.actWrite
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };

  handleFormSubmitForStates = (event) => {
    event.preventDefault();
    this.getByState();
  };

  handleStateFilterSubmitSat = (event) => {
    event.preventDefault();
    this.filterStateResultsSat();
  };

  handleStateFilterSubmitAct = (event) => {
    event.preventDefault();
    this.filterStateResultsAct();
  };

  handleStatePageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      this.getByState();
    });
  };

  // SearchByCity
  handleInputChangeForCity = (event) => {
    this.setState({ search: event.target.value });
  };

  getByCity() {
    this.setState({ ...this.state, lastSearch: "city" });
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
  }

  filterCityResultsSat = () => {
    this.setState({ ...this.state, lastSearch: "city" });
    API.getByCity(this.state.search, this.state.page).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[9] || values[10] || values[11] !== null) {
          if (
            values[9] <= this.state.satRead &&
            values[10] <= this.state.satMath &&
            values[11] <= this.state.satEng
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };

  filterCityResultsAct = () => {
    this.setState({ ...this.state, lastSearch: "city" });
    API.getByCity(this.state.search, this.state.page).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[5] || values[6] || values[7] || values[8] !== null) {
          if (
            values[5] <= this.state.actCumulative &&
            values[6] <= this.state.actEng &&
            values[7] <= this.state.actMath &&
            values[8] <= this.state.actWrite
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };
  handleFormSubmitForCity = (event) => {
    event.preventDefault();
    this.getByCity();
  };

  handleCityFilterSubmitSat = (event) => {
    event.preventDefault();
    this.filterCityResultsSat();
  };

  handleCityFilterSubmitAct = (event) => {
    event.preventDefault();
    this.filterCityResultsAct();
  };

  handleCityPageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      this.getByCity();
    });
  };

  // Search By Distance from Zipcode
  handleInputChangeForDist = (event) => {
    this.setState({ distance: event.target.value });
  };

  handleInputChangeForZip = (event) => {
    this.setState({ zipcode: event.target.value });
  };

  getByDistance() {
    this.setState({ ...this.state, lastSearch: "distance" });
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
  }

  filterDistanceResultsSat = () => {
    this.setState({ ...this.state, lastSearch: "distance" });
    API.getByDistance(
      this.state.zipcode,
      this.state.distance,
      this.state.page
    ).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[9] || values[10] || values[11] !== null) {
          if (
            values[9] <= this.state.satRead &&
            values[10] <= this.state.satMath &&
            values[11] <= this.state.satEng
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };

  filterDistanceResultsAct = () => {
    this.setState({ ...this.state, lastSearch: "distance" });
    API.getByDistance(
      this.state.zipcode,
      this.state.distance,
      this.state.page
    ).then((res) => {
      this.setState({
        colleges: res.data.results,
      });
      const filteredSchools = this.state.colleges.filter((school) => {
        let values = Object.values(school);
        if (values[5] || values[6] || values[7] || values[8] !== null) {
          if (
            values[5] <= this.state.actCumulative &&
            values[6] <= this.state.actEng &&
            values[7] <= this.state.actMath &&
            values[8] <= this.state.actWrite
          ) {
            return values;
          }
        }
      });
      console.log(filteredSchools);
      this.setState({
        results: filteredSchools,
      });
    });
  };

  handleFormSubmitForDist = (event) => {
    event.preventDefault();
    this.getByDistance();
  };

  handleDistanceFilterSubmitSat = (event) => {
    event.preventDefault();
    this.filterDistanceResultsSat();
  };

  handleDistanceFilterSubmitAct = (event) => {
    event.preventDefault();
    this.filterDistanceResultsAct();
  };

  handleDistPageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      this.getByDistance();
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
                      filterNameResultsSat={this.handleNameFilterSubmitSat}
                      filterNameResultsAct={this.handleNameFilterSubmitAct}
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
                      filterStateResultsSat={this.handleStateFilterSubmitSat}
                      filterStateResultsAct={this.handleStateFilterSubmitAct}
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
                      filterCityResultsSat={this.handleCityFilterSubmitSat}
                      filterCityResultsAct={this.handleCityFilterSubmitAct}
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
                      filterDistanceResultsSat={
                        this.handleDistanceFilterSubmitSat
                      }
                      filterDistanceResultsAct={
                        this.handleDistanceFilterSubmitAct
                      }
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
              activeClassName={"pageActive"}
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
              activeClassName={"pageActive"}
            />
          ) : (
            <></>
          )}
          {this.state.lastSearch === "city" ? (
            <ReactPaginate
              previousLabel={"<-"}
              nextLabel={"->"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handleCityPageChange}
              containerClassName={"pagination"}
              activeClassName={"pageActive"}
            />
          ) : (
            <></>
          )}
          {this.state.lastSearch === "distance" ? (
            <ReactPaginate
              previousLabel={"<-"}
              nextLabel={"->"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handleDistPageChange}
              containerClassName={"pagination"}
              activeClassName={"pageActive"}
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

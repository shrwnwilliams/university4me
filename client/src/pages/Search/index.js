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
    satEng: 650,
    satMath: 650,
    satRead: 650,
    actEng: 30,
    actMath: 30,
    actWrite: 30,
    actCumulative: 30,
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

  // 9. sat reading
  // 10. sat Math
  // 11. sat writing

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
  // 5. act cumulative
  // 6. act eng
  // 7. act Math
  // 8. act writing

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

  handleNameFilterSubmitSat = (event) => {
    event.preventDefault();
    this.filterNameResultsSat();
  };

  handleNameFilterSubmitAct = (event) => {
    event.preventDefault();
    this.filterNameResultsAct();
  };

  // SearchByStates
  // 9. sat reading
  // 10. sat Math
  // 11. sat writing

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

  handleStateFilterSubmitSat = (event) => {
    event.preventDefault();
    this.filterStateResultsSat();
  };

  handleStateFilterSubmitAct = (event) => {
    event.preventDefault();
    this.filterStateResultsAct();
  };
  // 5. act cumulative
  // 6. act eng
  // 7. act Math
  // 8. act writing

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

  // 9. sat reading
  // 10. sat Math
  // 11. sat writing

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

  handleCityFilterSubmitSat = (event) => {
    event.preventDefault();
    this.filterCityResultsSat();
  };

  handleCityFilterSubmitAct = (event) => {
    event.preventDefault();
    this.filterCityResultsAct();
  };
  // 5. act cumulative
  // 6. act eng
  // 7. act Math
  // 8. act writing

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

  handleFormSubmitForCity = (event) => {
    event.preventDefault();
    this.getByCity();
  };

  // SearchByDistance and Zipcode
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

  handleFormSubmitForDist = (event) => {
    event.preventDefault();
    this.getByDistance();
  };

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

  handleCityPageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      // window.scrollTo(0,0);
      this.getByCity();
      // this.scrollToTop();
    });
  };

  handleDistPageChange = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({ page: offset }, () => {
      console.log(this.state.page);
      // window.scrollTo(0,0);
      this.getByDistance();
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

import "./styles.css";
import List from "./List";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import React from "react";
import { courses } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bagItems: [],
    };
  }
  isCourseinBag = (id) => {
    return !!this.state.bagItems.find((c) => c.id === id);
  };

  handleAddToBag = (id) => {
    const course = courses.find((c) => c.id === id);
    this.setState({ bagItems: [course, ...this.state.bagItems] });
  };

  handleRemoveFromBag = (id) => {
    const filteredCourses = this.state.bagItems.filter((c) => c.id !== id);
    this.setState({ bagItems: filteredCourses });
  };

  render() {
    const { bagItems } = this.state;

    return (
      <div className="App">
        <Navbar itemCount={bagItems.length} />
        <h3>CodeTube Catalog</h3>
        <div className="container">
          <List
            bagItems={bagItems}
            isCourseinBag={this.isCourseinBag}
            handleAddToBag={this.handleAddToBag}
            handleRemoveFromBag={this.handleRemoveFromBag}
          />
          <Sidebar />
        </div>
      </div>
    );
  }
}
export default App;

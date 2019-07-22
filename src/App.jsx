import React from "react";
import PropTypes from "prop-types";

import Card from "./components/Card";

function App(props) {
  return (
    <main>
      <section className="cards">
        <div className="cards__inner">
          {props.items.map(item => (
            <Card
              key={item.id}
              title={item.name}
              subtitle={item.description}
              item={item}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

App.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          level: PropTypes.number.isRequired,
          cost: PropTypes.number.isRequired,
          chance: PropTypes.number.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default App;

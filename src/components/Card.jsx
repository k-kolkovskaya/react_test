import React from "react";
import PropTypes from "prop-types";
import Count from "./Count";
import Button from "./Button";
import Addition from "./Addition";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExplained: false
    };
  }

  renderImage() {
    return (
      <div className={`cards__image bg${Math.floor(Math.random() * 8)}`}>
        <img
          src="https://www.stickees.com/files/love/gifts/458-yellow-and-red-gift-box.png"
          alt="Gift"
        />
      </div>
    );
  }

  renderExplain() {
    return (
      <div className="addition card__addition">
        <table className="addition__table">
          <tbody>
            <tr className="addition__header">
              <th>Items</th>
              <th>Level</th>
              <th>Cost</th>
              <th>Chance</th>
            </tr>
            {this.props.item.items.map(item => (
              <Addition
                key={item.id}
                name={item.name}
                level={item.level}
                cost={item.cost}
                chance={item.chance}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="cards__item">
        {this.state.isExplained ? this.renderExplain() : this.renderImage()}

        <div className="cards__content">
          <div className="cards__title">
            <h1>{this.props.title}</h1>
          </div>

          <Count
            className={"count__num_blue"}
            start={this.props.item.start}
            end={this.props.item.end}
          />

          <div className="cards__text">
            <p>{this.props.subtitle}</p>
          </div>
          <div className="count cards__count">
            <div className="count__item">
              <div className="count__num_green">
                {this.props.item.items.length}
              </div>
              <div className="count__subtitle">items</div>
            </div>
            <div className="count__item">
              <div className="count__num_green">100</div>
              <div className="count__subtitle">chancetotal</div>
            </div>
          </div>
          <Button
            onClick={() =>
              this.state.isExplained
                ? this.setState({ isExplained: false })
                : this.setState({ isExplained: true })
            }
          />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Card;

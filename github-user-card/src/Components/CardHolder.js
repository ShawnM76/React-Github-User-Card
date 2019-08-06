import React from 'react';

class CardHolder extends React.Component {
  render() {
    return (
      <div className='me'>
        <div>
          <img width='300' src={this.props.img} />
          <h2>{this.props.name}</h2>
        </div>
        <div>
          <p>{this.props.bio}</p>
          <p>{this.props.location}</p>
        </div>
      </div>
    );
  }
}

export default CardHolder;

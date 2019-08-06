import React from 'react';

class FollowerCard extends React.Component {
  render() {
    return (
      <div className='followers'>
        <img width='200' src={this.props.follower_img} />
        <h2>{this.props.followers_name}</h2>
      </div>
    );
  }
}
export default FollowerCard;

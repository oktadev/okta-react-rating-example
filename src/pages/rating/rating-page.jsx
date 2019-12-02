import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { BrewstrRef } from '../../firebase';
import StarRating from '../../components/rater/star-rating';
import './rating-page.css';

class RatingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      rating: 0,
      user: ''
    };
  }

  async componentDidMount(){
    const user = await this.props.auth.getUser();
    this.setState({user:user.email});
  }


  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  setRating = rating => {
    this.setState({ rating: rating });
  };

  saveRating = () => {
    console.log(this.state);
    BrewstrRef.push()
      .set(this.state)
      .then(() => {
        this.props.history.push('/ratinglist');
      });
  };

  render() {
    return (
      <div className="rating-form">
        <div className="heading">Rate A Beer</div>
        <div className="form-input">
          <label htmlFor="name">Beer:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Rating:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="actions">
          <button type="submit" onClick={this.saveRating}>
            Submit Rating
          </button>
        </div>
      </div>
    );
  }
}


export default withAuth(RatingPage);

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import {BrewstrRef} from '../../firebase';
import './rating-list.css';

class RatingsListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      ratings: [],
      user:''
    };
  }

  async componentDidMount(){
    const user = await this.props.auth.getUser();
    BrewstrRef.orderByChild('user').equalTo(user.email).on('value', snap => {
      const response = snap.val();
      const ratings = [];
      for(let rating in response){
        ratings.push({id: rating, ...response[rating]});
      }
      this.setState({
        ratings: ratings
      });
    });
  }
  render(){
    return (
      <table className="ratings-list">
        <thead>
          <tr>
            <th>Beer</th>
            <th>Description</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {this.state.ratings.map((rating) => {
          return (
            <tr className="rating" key={rating.id}>
              <td>{rating.name}</td>
              <td>{rating.description}</td>
              <td className="rating-value">{rating.rating}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  } 
}

export default withAuth(RatingsListPage);
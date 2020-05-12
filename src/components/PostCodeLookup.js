import React, { Component } from 'react';
import PostcodeLookup from 'react-postcode-lookup';
 
class Example extends Component {
  render () {
    const { apiKey } = this.props;
 
    return (
      <PostcodeLookup onSelect={addr => console.log(addr)} apiKey={apiKey} />
    );
  }
}
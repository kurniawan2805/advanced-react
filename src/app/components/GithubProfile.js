import React from 'react';

const GithubProfile = ({profile}) => {
  return (
    <div style={{padding: 15, background: '#ddd', margin: '1rem'}}>
      <div>Name: {profile.name}</div>
      <div>Location: {profile.location}</div>
      <div>Company: {profile.company}</div>
    </div>
  );
};

export default GithubProfile;

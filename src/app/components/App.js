import React, {useState} from 'react';
import GithubProfile from './GithubProfile';
import Form from './Form';

import axios from 'axios'; // not the best the popular

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = newHandle => {
    axios
      .get(`https://api.github.com/users/${newHandle}`)
      .then(res => setProfiles([...profiles, res.data]));
  };
  // regenerated runtime
  console.log(profiles);
  return (
    <div className="container">
      <Form onSubmit={addNewProfile} />

      {profiles.map(profile => (
        <GithubProfile key={profile.id} profile={profile} />
      ))}
      {/* <GithubProfile profile={fakeData[1]} /> */}
    </div>
  );
};

export default App;

// const fakeData = [
//   {
//     login: 'dhh',
//     id: 2741,
//     node_id: 'MDQ6VXNlcjI3NDE=',
//     avatar_url: 'https://avatars0.githubusercontent.com/u/2741?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/dhh',
//     html_url: 'https://github.com/dhh',
//     followers_url: 'https://api.github.com/users/dhh/followers',
//     following_url: 'https://api.github.com/users/dhh/following{/other_user}',
//     gists_url: 'https://api.github.com/users/dhh/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/dhh/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/dhh/subscriptions',
//     organizations_url: 'https://api.github.com/users/dhh/orgs',
//     repos_url: 'https://api.github.com/users/dhh/repos',
//     events_url: 'https://api.github.com/users/dhh/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/dhh/received_events',
//     type: 'User',
//     site_admin: false,
//     name: 'David Heinemeier Hansson',
//     company: 'Basecamp',
//     blog: 'http://david.heinemeierhansson.com',
//     location: 'Chicago, USA',
//     email: null,
//     hireable: null,
//     bio: null,
//     public_repos: 22,
//     public_gists: 48,
//     followers: 12868,
//     following: 0,
//     created_at: '2008-03-10T17:53:51Z',
//     updated_at: '2019-01-29T21:20:51Z',
//   },
//   {
//     login: 'kurniawan2805',
//     id: 42286406,
//     node_id: 'MDQ6VXNlcjQyMjg2NDA2',
//     avatar_url: 'https://avatars3.githubusercontent.com/u/42286406?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/kurniawan2805',
//     html_url: 'https://github.com/kurniawan2805',
//     followers_url: 'https://api.github.com/users/kurniawan2805/followers',
//     following_url:
//       'https://api.github.com/users/kurniawan2805/following{/other_user}',
//     gists_url: 'https://api.github.com/users/kurniawan2805/gists{/gist_id}',
//     starred_url:
//       'https://api.github.com/users/kurniawan2805/starred{/owner}{/repo}',
//     subscriptions_url:
//       'https://api.github.com/users/kurniawan2805/subscriptions',
//     organizations_url: 'https://api.github.com/users/kurniawan2805/orgs',
//     repos_url: 'https://api.github.com/users/kurniawan2805/repos',
//     events_url: 'https://api.github.com/users/kurniawan2805/events{/privacy}',
//     received_events_url:
//       'https://api.github.com/users/kurniawan2805/received_events',
//     type: 'User',
//     site_admin: false,
//     name: 'Adi Kurniawan',
//     company: null,
//     blog: '',
//     location: null,
//     email: null,
//     hireable: null,
//     bio: null,
//     public_repos: 22,
//     public_gists: 0,
//     followers: 0,
//     following: 0,
//     created_at: '2018-08-11T02:07:36Z',
//     updated_at: '2019-02-08T04:21:31Z',
//   },
// ];

// every time introduce variable=> state
// const profiles = [];

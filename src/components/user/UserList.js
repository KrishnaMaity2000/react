

import React from 'react';

import Card from '../UI/Card';
import classes from './UserList.css';

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
      {props.users && props.users.map((user) => (
   <li key={user.id}>
    {user.name} ({user.age} years old)
  </li>
))}

        {/* {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))} */}
      </ul>
    </Card>
  );
};

export default UserList;
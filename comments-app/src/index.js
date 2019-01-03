import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  const date = new Date(faker.date.recent());
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author={name}
          avatar={faker.image.avatar()}
          date={date.toUTCString()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={name}
          avatar={faker.image.avatar()}
          date={date.toUTCString()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={name}
          avatar={faker.image.avatar()}
          date={date.toUTCString()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      

    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
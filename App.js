import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Newcomponents/ChatFeed';
import './App.css';

const projectID = 'faeee791-2cef-464b-993b-3f644e6d101c';

const App = () => {


  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};





// infinite scroll, logout, more customizations...

export default App;
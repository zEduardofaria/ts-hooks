import React, { useState } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>();

  async function loadData() {
    const response = await fetch('https://api.github.com/users/zEduardofaria');
    const data = await response.json();

    setUser(data);
  }

  return (
    <div>
      {user?.name}
    </div>
  );
}

export default App;
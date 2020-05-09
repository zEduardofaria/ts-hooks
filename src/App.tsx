import React, { useState, useEffect, useMemo, useCallback } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

  const greeting = useCallback(
    (user: User) => alert(`Hello ${user.name}`),
    []
  )
}

export default App;
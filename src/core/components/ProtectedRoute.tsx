import { FC, ReactNode } from 'react';
import { useAuth } from '@/lib/useAuth';

interface Props {
  children: ReactNode;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { user } = useAuth();

  // still loading
  if (user === undefined) return <p>Loading...</p>;

  // not logged in
  if (user === null) {
    window.location.href = '/signin';
    return null;
  }

  // logged in
  return <>{children}</>;
};

export default ProtectedRoute;

import { Navigate, useLocation } from 'react-router-dom';
import { User } from '../types';
// import { useSelector } from 'react-redux';
// import { AppState } from '../redux/reducer';
import { ReactNode } from 'react';
interface ProtectRoutesPropType {
  permissions: string[];
  children: ReactNode;
}

const ProtectedRoute = (props: ProtectRoutesPropType) => {
  const { permissions, children } = props;
  // const user: User | null = useSelector((state: AppState) => state.user.user);
  const user: User | null = {
    id: '34',
    userName: 'amcTest',
    role: 'USER'
  };
  
  const location = useLocation();
  if (user) {
    if (!permissions) {
      return children;
    } else if (permissions.includes(user.role)) {
      return children;
    } else {
      return <Navigate to={`/?redirectTo=${location.pathname}`} />;
    }
  } else {
    return <Navigate to={`/?redirectTo=${location.pathname}`} />;
  }
};

export default ProtectedRoute;

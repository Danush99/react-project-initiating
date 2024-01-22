import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './protectedRouter';
import { 
  HomePage,
  StripePaymentPage,
  TermsAndConditionsPage
 } from 'src/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/tnc',
    element: <TermsAndConditionsPage />
  },
  {
    path: '/stripePay',
    element: (
      <ProtectedRoute permissions={['ADMIN,USER']}>
        <StripePaymentPage />
      </ProtectedRoute>
    )
  }
]);

export default router;
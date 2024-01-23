import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './protectedRouter';
import { 
  HomePage,
  StripePaymentPage,
  TermsAndConditionsPage,
  ErrorPage,
  ReduxExamplePage
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
    path: '/redux',
    element: <ReduxExamplePage />
  },
  {
    path: '/stripePay',
    element: (
      <ProtectedRoute permissions={['ADMIN,USER']}>
        <StripePaymentPage />
      </ProtectedRoute>
    )
  },
  {
    path: "*",
    element: (
    <ErrorPage/>
    )
  } 
]);

export default router;
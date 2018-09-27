/**
 *
 * Asynchronously loads the component for ErrorMessage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

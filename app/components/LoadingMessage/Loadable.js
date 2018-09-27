/**
 *
 * Asynchronously loads the component for LoadingMessage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

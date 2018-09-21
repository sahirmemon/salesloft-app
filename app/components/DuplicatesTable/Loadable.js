/**
 *
 * Asynchronously loads the component for DuplicatesTable
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

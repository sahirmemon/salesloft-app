/**
 *
 * Asynchronously loads the component for PeopleTable
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

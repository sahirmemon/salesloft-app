/**
 *
 * Asynchronously loads the component for FrequencyCountTable
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

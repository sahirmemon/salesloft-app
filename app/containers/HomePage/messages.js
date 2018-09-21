/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'Level 1: People',
  },
  loading: {
    id: 'app.components.HomePage.loading',
    defaultMessage: 'Looks like we are still loading...',
  },
  frequencyCount: {
    id: 'app.components.HomePage.frequencyCount',
    defaultMessage: 'Level 2: Frequency Count',
  },
  showFrequencyCountButton: {
    id: 'app.components.HomePage.showFrequencyCountButton',
    defaultMessage: 'Show Frequency Count',
  },
  hideFrequencyCountButton: {
    id: 'app.components.HomePage.hideFrequencyCountButton',
    defaultMessage: 'Hide Frequency Count',
  },
  duplicates: {
    id: 'app.components.HomePage.duplicates',
    defaultMessage: 'Level 3: Duplicates',
  },
  showDuplicatesButton: {
    id: 'app.components.HomePage.showDuplicatesButton',
    defaultMessage: 'Show Duplicates',
  },
  hideDuplicatesButton: {
    id: 'app.components.HomePage.hideDuplicatesButton',
    defaultMessage: 'Hide Duplicates',
  },
});

import { isMobileOnly } from 'react-device-detect';

export const BASE_MAX_WIDTH = (() => (isMobileOnly ? 360 : 1442))();

import type { ICON_TYPE } from '../../lib/constants';

export type TIconButtonUIProps = {
  type: ICON_TYPE;
  isActive?: boolean;
  onClick?: () => void;
};

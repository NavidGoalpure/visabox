import { LOOKUP_STORE } from '../const';
import { ILookupEnum } from '../Interface';

export function getLookupLabel(lookup: ILookupEnum) {
  return LOOKUP_STORE?.[lookup];
}

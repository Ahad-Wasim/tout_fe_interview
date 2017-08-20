import { contentModel } from './InitialModels/content.model';
import { FETCHED_CMS_DATA } from '../Constants/constants';
import { customDeepClone } from '../Utils/Helper/helper';

const content = (state=contentModel, action) => {
  switch (action.type) {
    case FETCHED_CMS_DATA:
      return Object.assign({}, state, { headerValue: action.payload });
    default:
      return state;
  };
};

export { content };

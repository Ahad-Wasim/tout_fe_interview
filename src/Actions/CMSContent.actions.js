import { FETCHED_CMS_DATA } from '../Constants/constants';
import { actionCreator } from '../Utils/Helper/helper';

export const fetchCMSData = () => {
  /*
    We would have an asynchronous request here.
    axios.get('www.drupal.com').then(() => actionCreator(type, payload))

    But for this small application we will use a sample response

  */

  let cmsResponse = {
    headerValue: 'Timer Application',
    author: "Ahad Wasim",
  };

  return actionCreator(FETCHED_CMS_DATA, cmsResponse);
};

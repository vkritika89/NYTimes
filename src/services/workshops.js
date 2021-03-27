import axios from "axios";

function getWorkshops() {
  return axios
    .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:(%22Arts%22)&sort=newest&api-key=ANbWf0Gyc18XxiPWyYbnrP4htpQFammZ`)
    .then((response) => response.data) 
}
 
export { getWorkshops  };

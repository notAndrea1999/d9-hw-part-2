export const SET_JOBS = "SET_JOBS";
export const SET_COMPANY = "SET_COMPANY";
export const SEND_TO_FAVOURITES = "SEND_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const setJobsAction = (data) => ({ type: SET_JOBS, payload: data });
export const setCompanyAction = (data) => ({ type: SET_COMPANY, payload: data });
export const sendToFavouriteAction = (params) => ({ type: SEND_TO_FAVOURITES, payload: params });
export const removeFromFavouriteAction = (i) => ({ type: REMOVE_FROM_FAVOURITES, payload: i });

export const getJobsAction = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompanyAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleSubmitAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobsAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

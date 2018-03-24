export const CONTAINERS_REQUESTED = 'containers/CONTAINERS_REQUESTED'

export default function getContainers(){
  fetch('http://127.0.0.1:8000/containers')
  .then((res) => { 
      console.log(res.json)
      return res.json() })
  .then((data) => { 
      console.log(data);
      return data;
 })

 return dispatch => {
  dispatch({
    type: CONTAINERS_REQUESTED
  })
}
}
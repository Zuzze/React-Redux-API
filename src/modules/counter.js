export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

export const VESSELS_REQUESTED = 'counter/VESSELS_REQUESTED'
export const CONTAINERS_REQUESTED = 'counter/CONTAINERS_REQUESTED'
export const PLANS_REQUESTED = 'counter/PLANS_REQUESTED'
export const PLANS_CREATED = 'counter/PLANS_CREATED'

/*Redux Thunk is middleware for Redux that allows you to write 
action creators that return a function instead of an action*/

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
    console.log("fetching data...");
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }
    case VESSELS_REQUESTED:
    return {
    ...state,
    isDecrementing: !state.isDecrementing
    }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const vessels = () => {
    fetch('http://127.0.0.1:8000/vessels')
    .then((res) => { 
        console.log(res.json)
        return res.json() })
    .then((data) => { 
        console.log(data);
        return data;
   })

   return dispatch => {
    dispatch({
      type: VESSELS_REQUESTED
    })
  }
}

export const getVesselTable = () => {
    fetch('http://127.0.0.1:8000/vessels')
    .then((res) => { 
        console.log(res.json)
        return res.json() })
    .then((data) => { 
        console.log(data);
        return '<h1>hey</h1>';
   })

   return dispatch => {
    dispatch({
      type: VESSELS_REQUESTED
    })
  }
}

export const getContainers = () => {
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

export const getVesselPlans = () => {
    fetch('http://127.0.0.1:8000/vessel_plans')
    .then((res) => { 
        console.log(res.json)
        return res.json() })
    .then((data) => { 
        console.log(data);
        return data;
   })
   return dispatch => {
    dispatch({
      type: PLANS_REQUESTED
    })
  }
}

export const createVesselPlans = () => {
    console.log("posting new vessel plans...")
    fetch('http://127.0.0.1:8000/vessel_plans', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        vessel_id: 1,
        container_ids: [1, 3],
        })
    })

   return dispatch => {
    dispatch({
      type: PLANS_CREATED
    })
  }
}

export const decrement = () => {
    fetch('http://127.0.0.1:8000/vessels')
    .then((res) => { 
        console.log(res.json)
        return res.json() })
    .then((data) => { 
        console.log(data);
        return data;
   })

   
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}


export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
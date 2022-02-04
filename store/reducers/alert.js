
const initialState = {};

const alert = (state = initialState, action) => {
    const {type, payload} = action;
    
  switch (type) {
      
    case "ALERT":
        console.log(payload)
        console.log(payload)
      return payload;

    default:
      return state;
  }
};

export default alert;
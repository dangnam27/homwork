//state
//reducer
//store
const { createStore } = window.Redux;
const initialState = ["Listen to music"];
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state];
      newList.push(action.payload);
      return newList;
    }
    default:
      return state;
  }
};

const store = createStore(hobbyReducer);

//Render Redux hobbyList

const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length == 0) return;
  const ulElement = document.getElementById("hobbyListID");
  if (!ulElement) return;

  //reset previous content of ul
  ulElement.innerHTML = "";
  for (const hobby of hobbyList) {
    const liElement = document.createElement("li");
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};

//Render initial hobby list
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

//Handle form submit
const hobbyFormElement = document.getElementById("hobbyFormID");
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const hobbyTextElement = document.getElementById("hobbyTextID");
    if (!hobbyTextElement) return;
    const action = {
      type: "ADD_HOBBY",
      payload: hobbyTextElement.value,
    };
    store.dispatch(action);
    hobbyFormElement.reset();
  };
  hobbyFormElement.addEventListener("submit", handleFormSubmit);
}

store.subscribe(() => {
  //   console.log("State update", store.getState());
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);
});

import axios from "axios"

// NEW SYSTEM
const EVENTS = [];

document.onreadystatechange = () => {
  if (!document.readyState === "complete") {
    return;
  }

  window.addEventListener("message", (event) => {
    const name = event.data.name;
    const data = event.data.data;

    EVENTS.forEach(e => {
      if (e.name == name) {
        e.callback(data);
      }
    })
  })

  axios.post(`http://${GetParentResourceName()}/ready`);
}

function RegisterEvent(name, callback) {
  EVENTS.push({ name, callback });
}

export default RegisterEvent
export const sendLocalStorage = (usuario) => {
  let players = [];
  const key = JSON.parse(localStorage.getItem("userRegister"));
  if (key !== null) {
    key.push(usuario);
    localStorage.setItem("userRegister", JSON.stringify(key));
  } else {
    players.push(usuario);
    localStorage.setItem("userRegister", JSON.stringify(players));
  }
};

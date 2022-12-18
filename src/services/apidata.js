export const postUserLoginData = async (email, password) => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const jsonResponse = await response.json();
  // console.log(jsonResponse);
  if (jsonResponse.status === 200) {
    // If the requirement is met, the 'Token' will be stored in localStorage
    localStorage.setItem('Token', jsonResponse.body.token);
    // On crée un nouvel evenement manuellement au moment de la réponse 200
    // permet de mettre à jour le Token dans App.js
    window.dispatchEvent(new Event('storage'));
  }
};

export const getUserProfileData = async () => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // voir ligne 17
      Authorization: 'Bearer ' + localStorage.getItem('Token'),
    },
  });

  const jsonResponse = await response.json();
  if (jsonResponse.status === 200) {
    console.log(jsonResponse);
    return jsonResponse.body;
  }
};

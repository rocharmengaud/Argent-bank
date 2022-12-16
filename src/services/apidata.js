export const getUserLoginData = async (email, password) => {
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
  console.log(jsonResponse);
  if (jsonResponse.status === 200) {
    // If the requirement is met, the 'Token' will be stored in localStorage
    localStorage.setItem('Token', jsonResponse.body.token);
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
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  const { data } = await response.json();
  return data;
};

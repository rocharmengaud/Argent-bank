export const getUserProfileData = async () => {
  // le await ici force le fetch à attendre que la promesse sois terminée
  const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    headers: {},
    method: 'POST',
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  const { data } = await response.json({ success: true, message: 'success' });
  return data;
};

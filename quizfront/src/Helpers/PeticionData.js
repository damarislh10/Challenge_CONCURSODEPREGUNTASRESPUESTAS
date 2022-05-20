export const PeticionData = async (urlData) => {
  const resp = await fetch(urlData);
  const data = await resp.json();
  return data;
};

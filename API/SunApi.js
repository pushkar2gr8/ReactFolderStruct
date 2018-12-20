export const login = async (email, password) => {
  CLIENT_JWT = "JWT";
  const login = await fetch("API", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + CLIENT_JWT,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  let loginRespone = await login.json();
  return loginRespone;
};

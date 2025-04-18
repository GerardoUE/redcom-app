async function login(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else console.log("Logueado:", data);
  }
  
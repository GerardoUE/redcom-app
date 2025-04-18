async function signup(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert("Revisa tu email para confirmar.");
  }
  
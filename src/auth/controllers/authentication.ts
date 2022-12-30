import authenticate from '../../api/commercetools/auth';

const login = async (req, res) => {
  const {
    body: {
      email,
      password,
    },
  } = req;

  try {
    const data = await authenticate(email, password, req.session.customer);
    req.session.loggedIn = true;
    // @ts-ignore
    req.session.customer = data.body.customer.id;
    await req.session.save();
    // @ts-ignore
    res.send(data.body);
  } catch (error) {
    res.status(error.statusCode);
    res.send(error);
  }
};

const logout = async (req, res) => {
  await req.session.destroy();
  res.send({
    loggedOut: true,
  });
};

export {
  login,
  logout,
};

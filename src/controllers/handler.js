export const getAuthHandler = function (req, rep) {
    // Récupère data utilisateur à partir du jeton JWT
    const { email, role } = req.user;

    let message = 'Accès autorisé';
    if (role === 'admin') {
        message = 'Full access';
    } else if (role === 'utilisateur') {
        message = 'Accès limité';
    }

    return rep.send({ email, role, message });
}

export const getHomeHandler = (req, res) => {
    return res.send({'hello': 'world'})
}
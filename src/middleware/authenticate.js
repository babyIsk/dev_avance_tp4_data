export async function getAuthenticate(req, res) {
    try {
        await req.jwtVerify(); // Vérifie le jeton JWT

    } catch (err) {
        res.code(401).send({...err, message: "Vous ne passerez pas !"})
    }
}
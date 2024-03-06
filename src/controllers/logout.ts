import { Request, Response } from "express";

/**
 * Logout user
 * @param req - objeto de solicitud
 * @param res - objeto de respuesta
 */
const logout = async (req: Request, res: Response) => {
    try {
        // Aquí puedes realizar cualquier lógica adicional que necesites antes de cerrar la sesión.
        // Por ejemplo, invalidar tokens, eliminar cookies, etc.

        // Limpiar la cookie de sesión (si estás utilizando cookies)
        res.clearCookie('authToken'); // Reemplaza 'authToken' con el nombre de tu cookie

        // O invalidar el token (si estás utilizando JWT)
        // Algo como: await invalidateToken(req.user.id);

        // Redirigir al usuario a la página de inicio de sesión o a donde desees
        res.redirect('/login');
    } catch (err) {
        res.status(500).json({ message: "Error durante el logout" });
    }
};

export { logout };

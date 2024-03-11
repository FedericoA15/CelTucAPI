import { Request, Response } from 'express';
import axios from 'axios';

const API_URL = 'https://api.tiendanube.com/v1/'; 

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name } = req.body; 
        const accessToken = 'TU_ACCESS_TOKEN'; 

        const response = await axios.post(
            `${API_URL}123456/products`, 
            { name },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(201).json(response.data);
    } catch (error: any) {
        console.error('Error al crear el producto:', error.message);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

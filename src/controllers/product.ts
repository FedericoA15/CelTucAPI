import { Request, Response } from 'express';
import axios from 'axios';

const API_URL = 'https://api.tiendanube.com/v1/';
const STORE_ID = '123456';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const accessToken = 'TU_ACCESS_TOKEN';

        body["images"] = (req as any)["images"];

        const response = await axios.post(
            `${API_URL}${STORE_ID}products`,
            { body },
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

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const accessToken = 'TU_ACCESS_TOKEN';

        const response = await axios.get(`${API_URL}${STORE_ID}/products`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        res.status(200).json(response.data);
    } catch (error: any) {
        console.error('Error al obtener los productos:', error.message);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const accessToken = 'TU_ACCESS_TOKEN';

        const response = await axios.get(`${API_URL}${STORE_ID}/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        res.status(200).json(response.data);
    } catch (error: any) {
        console.error('Error al obtener el producto:', error.message);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const { name, price, description } = req.body;
        const accessToken = 'TU_ACCESS_TOKEN';

        const response = await axios.put(
            `${API_URL}${STORE_ID}/products/${productId}`,
            { name, price, description },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error: any) {
        console.error('Error al actualizar el producto:', error.message);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};
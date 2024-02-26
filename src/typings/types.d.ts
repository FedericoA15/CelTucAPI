type Message = {
    name: string;
    date: string;
    text: string;
    imgUrl: string;
};

type Item = {
    product_img: string;
    product_name: string;
    product_price: number;
    product_quantity: number;
};

type CategoryItem = {
    icon: string;
    title: string;
    href?: string;
    child?: { title?: string; href?: string }[];
};
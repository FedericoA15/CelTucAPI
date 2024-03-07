import { Router } from "express";
import { createCRUDRoutes } from "../base/routes/route";
import {
  AddressModel,
  BlogModel,
  BrandModel,
  CategoryModel,
  CategoryBasedProductsModel,
  FurnitureCarouselItemModel,
  GiftCarouselItemModel,
  GroceryTwoCarouselItemModel,
  HealthCarouselItemModel,
  MainCarouselItemModel,
  OrderModel,
  ProductModel,
  ReviewModel,
  ServiceModel,
  ShopModel,
  UserModel,
  TicketModel,
} from "../database/schemas/_index";
import routerLogin from "./login";
import routerUser from "./user";
import routerLogout from "./logout";

const router = Router();

router.use("/address",createCRUDRoutes(AddressModel));
router.use("/blog", createCRUDRoutes(BlogModel));
router.use("/brand", createCRUDRoutes(BrandModel));
router.use("/category", createCRUDRoutes(CategoryModel));
router.use("/categoryBasedProducts", createCRUDRoutes(CategoryBasedProductsModel));
router.use("/furnitureCarouselItem", createCRUDRoutes(FurnitureCarouselItemModel));
router.use("/giftCarouselItem", createCRUDRoutes(GiftCarouselItemModel));
router.use("/groceryTwoCarouselItem", createCRUDRoutes(GroceryTwoCarouselItemModel));
router.use("/healthCarouselItem", createCRUDRoutes(HealthCarouselItemModel));
router.use("/mainCarouselItem", createCRUDRoutes(MainCarouselItemModel));
router.use("/order", createCRUDRoutes(OrderModel));
router.use("/product", createCRUDRoutes(ProductModel));
router.use("/review", createCRUDRoutes(ReviewModel));
router.use("/service", createCRUDRoutes(ServiceModel));
router.use("/shop", createCRUDRoutes(ShopModel));
router.use("/user", routerUser,createCRUDRoutes(UserModel, "avatar"));
router.use("/ticket", createCRUDRoutes(TicketModel));

router.use("/login", routerLogin)
router.use("/logout", routerLogout)

export default router;
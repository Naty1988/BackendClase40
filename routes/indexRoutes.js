const Router = require("express");
const router = Router();

// const userRoutes =  require("./userRoutes")
const productRoutes =  require("./productRoutes")
const cartRoutes =  require("./cartRoutes")
const messagesRoutes =  require("./messagesRoutes")
const otherRoutes =  require("./otherRoutes")

// router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);
router.use('/message', messagesRoutes);
router.use('/other', otherRoutes);

module.exports = router;
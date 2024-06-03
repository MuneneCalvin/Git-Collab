import notificationRoutes from './notification.routes';

const routes = (app) => {
    app.use('/notifications', notificationRoutes);
}

export default routes;

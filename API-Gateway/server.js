import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 5200;
// Define routes with ports
// Here routes are read by .env file
const routes = {
  "/auth": process.env.AUTH_MS_BASEURL,
  "/post": process.env.POST_MS_BASEURL,
};

// Create a proxy for a each route

for (let route in routes) {
  const target = routes[route];
  app.use(route, createProxyMiddleware({ target }));
}

app.listen(PORT, () => {
  console.log(`API Gateway Server is running on PORT ${PORT}`);
});

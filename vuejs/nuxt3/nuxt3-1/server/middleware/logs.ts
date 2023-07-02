export default defineEventHandler((event) =>
  console.log('middleware[server]called: ' + event.node.req.url)
);
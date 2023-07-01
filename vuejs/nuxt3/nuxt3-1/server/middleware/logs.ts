export default defineEventHandler((event) =>
  console.log('Middleware 呼ばれた: ' + event.node.req.url)
);
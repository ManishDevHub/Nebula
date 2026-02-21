export async function authMiddleware(c: any, next: any) {
  const userId = c.req.header("x-user-id"); // ✅ CORRECT METHOD

  if (!userId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  c.set("userId", userId);

  await next();
}
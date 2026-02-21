

export async function authMiddleware (c:any , next:Function) {
    const userId = c.req.headers.get("X-User-Id");

    if(!userId){
        return c.json({ error: "Unauthorized" }, { status: 401 });
    }
    c.set("userId", userId);
    await next();
}
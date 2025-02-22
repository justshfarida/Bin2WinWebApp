import request from "supertest";
import { app, server } from "../index.js"; // Import both app & server

describe("Test Express Routes", () => {
    test("GET / should return 200", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    });

    test("GET /about should return 200", async () => {
        const res = await request(app).get("/about");
        expect(res.statusCode).toBe(200);
    });

    test("GET /contact should return 200", async () => {
        const res = await request(app).get("/contact");
        expect(res.statusCode).toBe(200);
    });

    test("GET /invalid should return 404", async () => {
        const res = await request(app).get("/invalid");
        expect(res.statusCode).toBe(404);
    });
});

// Close the server after all tests
afterAll(() => {
    server.close();
});

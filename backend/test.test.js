
import request from 'supertest'
import app from "./server.js";








describe("POST /login", () => {
  describe("given a email and a password", () => {
    test("should respond with success message : you are logged in", async () => {
      const res = await request(app).post("/login").send({
        email: "admin@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).toBe(200);
    });
  });


  describe("given a wrong  email and a password", () => {
    test("should respond with err message : wrong password or email", async () => {
      const res = await request(app).post("/login").send({
        email: "simoghbaar@gmail.com",
        password: "234",
      });
      expect(res.statusCode).toBe(400);
    });
  });





  describe("given a empty email and a password feilds", () => {
    test("should respond with err message : User name or password feilds are empty", async () => {
      const res = await request(app).post("/login").send({
    
      });
      expect(res.statusCode).toBe(401);
    });
  });
});
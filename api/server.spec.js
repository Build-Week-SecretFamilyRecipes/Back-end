const request = require("supertest");
const db = require("../database/dbConfig.js");
const server = require("./server.js");

describe("server,js", () => {
  it("should set the test env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it.skip("should return 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });
});

describe("Post /register", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it.skip("returns 201", () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "Gabe",
        password: "Ball4theGame"
      })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
  it.skip("returns user object", () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "Gabe",
        password: "Ball4theGame"
      })
      .then(res => {
        expect(typeof res.body).toBe("object");
      });
  });
});

describe("Post /login", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it.skip("returns 200", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({
        username: "Gabe",
        password: "Ball4theGame"
      });
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "Gabe",
        password: "Ball4theGame"
      })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it.skip("returns user object", () => {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "Gabe",
        password: "Ball4theGame"
      })
      .then(res => {
        expect(typeof res.body).toBe("object");
      });
  });
});

// describe("Get /jokes", () => {
//   beforeEach(async () => {
//     await db("users").truncate();
//   });
//   it("returns 200", async () => {
//     await request(server)
//       .post("/api/auth/register")

//       .send({});
//     await request(server)
//       .post("/api/auth/login")
//       .send({
//         username: "Gabe",
//         password: "Ball4theGame"
//       });
//     return request(server)
//       .get("/api/jokes")
//       .then(res => {
//         expect(res.status).toBe(200);
//       });
//   });
//   it.skip("returns user object", () => {
//     return request(server)
//       .post("/api/jokes")
//       .send({
//         username: "Gabe",
//         password: "Ball4theGame"
//       })
//       .then(res => {
//         expect(typeof res.body).toBe("object");
//       });
//   });
// });

describe("GET /recipes", () => {
  it.skip("should return an array", () => {
    return request(server)
      .get("/api/auth/recipes")
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
});

describe("GET /users", () => {
  it.skip("should return an array", () => {
    return request(server)
      .get("/api/auth/users")
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
});

describe("GET recipe by id", () => {
  it.skip("should return an array", () => {
    return request(server)
      .get("/api/auth/find-recipes/2")
      .then(res => {
        expect(typeof res.body).toBe("object");
      });
  });

  it.skip("should return an array", () => {
    return request(server)
      .get("/api/auth/find-recipes/2")
      .then(res => {
        expect(typeof res.body).toBe("object");
      });
  });
});

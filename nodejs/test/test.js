const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { assert } = chai;

chai.use(chaiHttp);

// Describe the test
describe("Server!", () => {

  // Test get
  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.status, "success");
        assert.equal(res.body.message, "Welcome To Testing API");
        done();
      });
  });

  // test post by sending data
  it("adds 2 numbers", done => {
    chai
      .request(app)
      .post("/add")
      .send({ num1: 5, num2: 5 })
      .end((err, res) => {
        assert.equal(err, null);
        assert.equal(res.status, 200);
        assert.equal(res.body.status, "success");
        assert.equal(res.body.result, 10);
        done();
      });
  });
});
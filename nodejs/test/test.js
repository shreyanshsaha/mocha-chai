/**
 * NodeJS testing using Mocha & Chai
 * ---------------------------------
 * This is a test script which tests the api we made.
 * Node: This script usses assert style syntax. In the
 * future i'll add should and expect styles as well.
 * 
 */

const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { assert } = chai;

chai.use(chaiHttp);

// Describe the test
describe("Server!", () => {

  // Test GET /
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

  // test POST /add by sending data
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
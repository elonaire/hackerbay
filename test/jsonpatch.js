const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('/GET users/login', ()=>{
  it('it should return status code 200', (done)=>{
    chai.request(server)
    .get('/users/login')
    .end((err,res)=>{
      res.should.have.status(200);
      done();
    });
  });
});

describe('/PATCH jsonpatch', ()=>{
  it('it should return status code 401', (done)=>{
    chai.request(server)
    .patch('/jsonpatch')
    .end((err,res)=>{
      res.should.have.status(401);
      done();
    });
  });
});

describe('/POST thumbnails', ()=>{
  it('it should return status code 401', (done)=>{
    chai.request(server)
    .post('/thumbnails')
    .end((err,res)=>{
      res.should.have.status(401);
      done();
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello Cars!');
  });

  it('/cars (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/cars/{id:1} (GET)', () => {
    const idToBeRequested = 1;
    return request(app.getHttpServer())
      .get(`/cars/${idToBeRequested}`)
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/cars (POST)', () => {
    const newCarTest = {
      model: 'Teste',
      brand: 'Teste',
    };
    return request(app.getHttpServer())
      .post('/cars')
      .send(newCarTest)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(newCarTest);
  });
});

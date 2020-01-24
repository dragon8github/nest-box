import { Test, TestingModule } from '@nestjs/testing';
import { ActicleController } from './acticle.controller';

describe('Acticle Controller', () => {
  let controller: ActicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActicleController],
    }).compile();

    controller = module.get<ActicleController>(ActicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

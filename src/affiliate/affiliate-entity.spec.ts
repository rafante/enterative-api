import { Test, TestingModule } from '@nestjs/testing';
import { AffiliateEntity } from './affiliate-entity';

describe('AffiliateEntity', () => {
  let provider: AffiliateEntity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffiliateEntity],
    }).compile();

    provider = module.get<AffiliateEntity>(AffiliateEntity);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

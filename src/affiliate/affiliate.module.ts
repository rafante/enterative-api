import { Module } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer.service';
import { AffiliateController } from './affiliate.controller';
import { AffiliateService } from './affiliate.service';
import { Affiliate } from './affiliate-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Affiliate])],
  controllers: [AffiliateController],
  providers: [MailerService, AffiliateService, Affiliate]
})
export class AffiliateModule { }

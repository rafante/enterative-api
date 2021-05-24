import { Module } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer.service';
import { AffiliateController } from './affiliate.controller';
import { AffiliateService } from './affiliate.service';
import { AffiliateEntity } from './affiliate-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AffiliateEntity])],
  controllers: [AffiliateController],
  providers: [MailerService, AffiliateService, AffiliateEntity]
})
export class AffiliateModule { }

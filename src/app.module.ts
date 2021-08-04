import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AffiliateModule } from './affiliate/affiliate.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Affiliate } from './affiliate/affiliate-entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AffiliateModule,
    MailerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST ?? 'localhost',
      port: Number(process.env.MYSQL_PORT ?? '3306'),
      database: 'enterative_api',
      username: process.env.MYSQL_USERNAME ?? 'root',
      password: process.env.MYSQL_PASSWORD ?? 'root',
      entities: [Affiliate],
      synchronize: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: '/files'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

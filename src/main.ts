import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Log connection details before app starts
  console.log('TypeORM Connection Config:', {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
  });

  const app = await NestFactory.create(AppModule);

  // Opcional: prefijo global para tu API
  app.setGlobalPrefix('api');

  // Configuración básica de Swagger
  const config = new DocumentBuilder()
    .setTitle('API MyHomeTech')
    .setDescription('Documentación de todos los endpoints')
    .setVersion('1.0')
    // .addBearerAuth()   // Habilita autorización JWT en Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();

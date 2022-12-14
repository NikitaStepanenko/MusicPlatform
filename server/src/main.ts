import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () => console.log('listening on port ' + PORT));
  } catch (err) {
    console.log(err);
  }
};

start();

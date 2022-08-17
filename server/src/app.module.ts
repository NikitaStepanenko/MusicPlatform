import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.d7f6c.mongodb.net/?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TrackModule,
    AlbumModule,
    FileModule,
  ],
})
export class AppModule {}

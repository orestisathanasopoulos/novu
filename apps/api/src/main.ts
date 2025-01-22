import { Logger } from '@nestjs/common';
import { bootstrap } from './bootstrap';

bootstrap().catch((err) => {
  Logger.error('Error during bootstrap', err);
});

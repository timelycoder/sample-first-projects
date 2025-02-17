import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
  await mongoose.connect(config.database_url as string);
}

main();

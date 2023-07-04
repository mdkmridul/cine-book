export class Keys {
  PORT: string = null;
  MONGO_URI: string = null;

  constructor() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('dotenv').config();
    } catch (error) {}
    this.prepareKeys();
  }

  prepareKeys() {
    this.PORT = process.env.PORT;
    this.MONGO_URI = process.env.MONGO_URI;
  }
}

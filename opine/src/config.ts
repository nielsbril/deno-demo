import { config } from '../deps/index.ts';

const env = config();

export interface IConfig {
    state: {
        env: string;
        version: string;
    };
    server: {
        host: string,
        port: number;
    };
}

export default {
    state: {
        env: env.ENV,
        version: env.VERSION,
    },
    server: {
        host: env.HOST,
        port: Number(env.PORT) || 3000,
    },
};
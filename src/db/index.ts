import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

// Lazy initialization — só cria cliente quando a função for chamada,
// não no parse do módulo (que quebra em build-time sem DATABASE_URL)
let _client: ReturnType<typeof createClient> | null = null;
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

function getDb() {
  if (!_db) {
    _client = createClient({
      url: process.env.DATABASE_URL || './data/contrato-express.db',
    });
    _db = drizzle(_client, { schema });
  }
  return _db;
}

// Proxy que delega para getDb() em todas as chamadas de método do drizzle
// Isso permite manter a sintaxe `db.select()` sem mudar os call sites
type DrizzleDb = ReturnType<typeof drizzle<typeof schema>>;

const dbProxy: DrizzleDb = new Proxy({} as DrizzleDb, {
  get(_target, prop, receiver) {
    const database = getDb();
    const value = (database as any)[prop];
    if (typeof value === 'function') {
      return value.bind(database);
    }
    return value;
  },
});

export { dbProxy as db };
// Build env: DATABASE_URL must be set in Coolify (build-time env var)
// Production: file:./data/contrato-express.db
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL || './data/contrato-express.db',
  },
});
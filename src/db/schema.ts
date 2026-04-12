import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  name: text('name'),
  plan: text('plan').default('free'),
  copyCount: integer('copy_count').default(0),
  copyLimit: integer('copy_limit').default(10),
  // Asaas customer ID — created on signup, used for all payments
  asaasCustomerId: text('asaas_customer_id'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const contracts = sqliteTable('contracts', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  templateId: text('template_id').notNull(),
  planType: text('plan_type').notNull(), // 'basic' | 'pro'
  status: text('status').default('draft'), // 'draft' | 'completed' | 'paid'
  data: text('data'), // JSON with form answers
  pdfUrl: text('pdf_url'),
  amount: real('amount').notNull(),
  asaasPaymentId: text('asaas_payment_id'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export const orders = sqliteTable('orders', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  contractId: text('contract_id'),
  amount: real('amount').notNull(),
  status: text('status').default('pending'), // 'pending' | 'paid' | 'cancelled' | 'refunded'
  asaasPaymentId: text('asaas_payment_id'),
  asaasTransactionId: text('asaas_transaction_id'),
  qrCodeUrl: text('qr_code_url'),
  encodedImage: text('encoded_image'),
  dueDate: integer('due_date', { mode: 'timestamp' }),
  paidAt: integer('paid_at', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const contractTemplates = sqliteTable('contract_templates', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  category: text('category').notNull(),
  planType: text('plan_type').notNull(), // 'basic' | 'pro'
  fields: text('fields').notNull(), // JSON array of field definitions
  content: text('content').notNull(), // Template text with placeholders
  active: integer('active', { mode: 'boolean' }).default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});
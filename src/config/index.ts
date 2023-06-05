import dotenv from 'dotenv'
import path from 'path'
/* eslint-disable no-undef */

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
}

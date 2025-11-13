// import { defineConfig } from 'drizzle-kit'
// import path from 'path'
// import { fileURLToPath, pathToFileURL } from 'url'

// const dbPath = path.join(
//   process.env.APPDATA || '', // Windows appData fallback
//   'electron-test',
//   'pos-inventory.db'
// )

// // path to file:// URL
// const dbUrl = pathToFileURL(dbPath).href

// export default defineConfig({
//   schema: 'src/main/db/schema.ts',
//   out: 'src/main/db/drizzle/migrations',
//   dialect: 'sqlite',
//   dbCredentials: {
//     url: dbUrl // 👉 file:// URL
//   }
// })

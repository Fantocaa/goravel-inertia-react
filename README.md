# Goravel + Inertia.js v3 + React 19 (TSX) Starter Kit

A premium developer starter kit combining **Goravel** (a Laravel-like framework written in Go) with **Inertia.js v3**, **React 19**, **Vite 8** (with Rolldown & Oxc), **Tailwind CSS v4**, and **shadcn/ui**.

This repository is designed to emulate the Laravel + Inertia DX as closely as possible in a 100% Go-based codebase.

---

## 🚀 Tech Stack

- **Backend:** [Go](https://go.dev/) & [Goravel Framework](https://www.goravel.dev/) (using the Gin HTTP driver).
- **Backend Inertia Adapter:** [gonertia/v3](https://github.com/romsar/gonertia) supporting the Inertia.js 3.0 protocol.
- **Frontend SPA Engine:** [Inertia.js v3](https://inertiajs.com/) (React adapter).
- **Frontend Framework:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) (TSX).
- **Bundler:** [Vite v8](https://vite.dev/) powered by Rust-based [Rolldown](https://github.com/rolldown/rolldown) & [Oxc](https://github.com/oxc-project/oxc).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) (Radix primitives, tw-animate-css, Geist font).

---

## 🛠️ Features Implemented

1. **Vite Hot Module Replacement (HMR)**: Mimics Laravel's hot-reload check by automatically checking for `public/hot` and piping assets through the Vite development server in development mode.
2. **React Fast Refresh Support**: Includes a custom `viteReactRefresh` Go template function to inject the React preamble required by Vite for development updates.
3. **Inertia Middleware**: Built-in Go middleware to handle SPA redirects, asset version checks, and validation error flash sharing.
4. **Clean Component Architecture**: Pages are written in TypeScript (`.tsx`) under `resources/js/Pages/` and styled with Tailwind CSS v4 variables and shadcn/ui layout guidelines.
5. **Lightning Fast Build Times**: Asset bundling compiles in less than **250ms** utilizing Vite 8's new Rolldown compiler.

---

## 📁 Project Directory Structure

```text
├── app/
│   ├── facades/
│   │   └── inertia.go         # Inertia manager facade
│   ├── helpers/
│   │   ├── response.go        # Custom InertiaResponse implementer
│   │   └── vite.go            # Go template helpers (vite and viteReactRefresh)
│   ├── http/
│   │   └── middleware/
│   │       └── inertia.go     # Go request middleware
│   └── providers/
│       └── inertia_service_provider.go # Service provider for dependency binding
│
├── config/
│   ├── http.go                # View compiler & template function map config
│   └── inertia.go             # Asset version and layout config
│
├── resources/
│   ├── css/
│   │   └── app.css            # Tailwind CSS v4 & theme variables
│   ├── js/
│   │   ├── components/        # shadcn/ui components (e.g. button.tsx)
│   │   ├── lib/
│   │   │   └── utils.ts       # shadcn/ui utility helpers
│   │   ├── Pages/
│   │   │   └── Welcome.tsx    # Welcome React component
│   │   └── app.tsx            # Inertia app mount entrypoint
│   └── views/
│       └── app.html           # Root layout html
│
├── vite.config.ts             # Strongly typed Vite 8 & Tailwind v4 config
└── tsconfig.json              # TypeScript compilation paths & types
```

---

## ⚡ Installation & Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Go** (v1.20 or newer)
- **Node.js** (v18 or newer)
- **npm** (v10 or newer)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blog.git
cd blog
```

### 2. Configure Environment variables
Copy the example environment configuration:
```bash
cp .env.example .env
```

### 3. Install Go dependencies
```bash
go mod download
```

### 4. Install npm packages
Since Vite 8 and React 19 are bleeding-edge, run the installation with the legacy peer dependency resolver:
```bash
npm install --legacy-peer-deps
```

---

## 💻 Running the Application

For a fully responsive development experience, you need to run **both** the Vite development server and the Go application.

### Step 1: Start the Vite Dev Server
```bash
npm run dev
```

### Step 2: Start the Goravel App
In a separate terminal tab or window, launch the Go backend server:
```bash
go run .
```

Visit the application at `http://localhost:3000` (or the port defined in your `.env`).

---

## 📦 Production Deployment

To bundle your assets and build the Go binary for production:

### 1. Build Client Assets
```bash
npm run build
```
This compiles and bundles your CSS and React entry point into the `public/build` directory, and generates the `.vite/manifest.json` file.

### 2. Compile Go Application
```bash
go build -o app.exe .
```
On Linux / macOS:
```bash
go build -o app .
```
You can now run your self-contained production binary!

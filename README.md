# 🪙 Coinbase Smart Wallet Demo

A simple application to create and fund Coinbase Smart Wallets using the Coinbase SDK.

## ✨ Features

- Create a Coinbase Smart Wallet
- Fund your wallet using the faucet
- Transfer ETH to your wallet
- Mobile-responsive UI
- Dark mode support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Coinbase Developer Platform account and API credentials

### Environment Variables

This project includes an `.env.example` file that you can copy to create your own `.env.local` file:

```bash
cp .env.example .env.local
```

Then, fill in the following variables in your `.env.local` file:

```
CDP_APP_KEY_ID=your_coinbase_app_key_id
CDP_SECRET=your_coinbase_secret_key
```

You can obtain these credentials by creating API keys at the [Coinbase Developer Platform](https://portal.cdp.coinbase.com/projects/api-keys).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/coinbase-quickstart.git
cd coinbase-quickstart
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🔧 API Routes

- `GET /api/wallet` - Creates a new smart wallet and returns its address

## 🌐 Deploying on Vercel

### Setup

1. Push your code to a GitHub repository.

2. Visit [Vercel](https://vercel.com/new) and import your repository.

3. Add the required environment variables:

   - `CDP_APP_KEY_ID`
   - `CDP_SECRET`

4. Deploy the application.

### Continuous Deployment

Vercel will automatically deploy your application when you push changes to your repository.

## 🧩 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Coinbase SDK](https://docs.cloud.coinbase.com/node/docs) - For interacting with Coinbase services
- [Viem](https://viem.sh/) - Ethereum library

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

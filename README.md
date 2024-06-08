
# StealthX
## StealthX

![AI Flow Wallet home page](https://github.com/samarabdelhameed/pics/blob/main/pro1.png)




### ✍ Project Overview

Hey there, privacy enthusiasts and blockchain explorers! Have you ever wished you could send and receive funds without anyone snooping around your business? Well, say hello to StealthX – your personal privacy guardian on the opBNB and BNB Blockchain. We’re tackling the issue of exposing personal info during transactions by introducing stealth addresses. In simple terms, StealthX lets you receive funds on the opBNB and BNB Blockchain without unveiling your real address.

The project draws inspiration from existing privacy-focused blockchains like Monero and tools like Tornado Cash, but aims to bridge the gap between complex and expensive privacy solutions and non-private transfers. It empowers users to maintain their privacy, fostering trust and security in the blockchain industry.

## StealthX home page 

![AI Flow Wallet home page](https://github.com/samarabdelhameed/pics/blob/main/bbm.png
)



### 😎 Idea

Picture this: you’re in the world of blockchain, where transparency is the name of the game. But what if you could be like a digital ninja and keep your financial moves hidden? That’s where StealthX draws inspiration from cool privacy champs like Monero and Tornado Cash. They’re like those fancy gadgets spies use, but they can be a bit pricey and complicated. But wait, here’s the twist – we’re making privacy simple and accessible for everyone, just like your favorite comfort food.

Inspired by Vitalik’s article about “Stealth Addresses,” we’re crafting a tool that lets you go hidden while making transactions. And why opBNB and BNB, you ask? Well, it’s like the perfect partner in crime – fast and wallet-friendly transactions. And StealthX? It’s like your digital alter ego, keeping you anonymous while you make transactions. Cool, right?

### 📺 Background & Context

**Issue Addressed:** StealthX addresses the pressing concern of inadequate privacy in blockchain transactions. While the blockchain guarantees transparency and immutability, it simultaneously exposes sensitive details of transactions, such as sender and recipient addresses. This lack of privacy imposes significant risks on both individuals and businesses, potentially connecting their financial actions to real-world identities.

**Significance:** Addressing this issue assumes paramount importance due to its direct impact on safeguarding financial confidentiality. By introducing a user-centric solution that leverages stealth addresses for anonymous transactions, StealthX empowers users to regain control over their financial privacy and alleviate the potential pitfalls linked with identity exposure.

### ☄️ Value Proposition

- **Enhanced Privacy:** StealthX utilizes stealth addresses, allowing users to receive funds without revealing their real addresses. This provides a significant level of privacy for individuals and businesses, ensuring that their financial activities are shielded from prying eyes.
- **User-Friendly Solution:** StealthX aims to be accessible and user-friendly for both power users and non-power users. The generation and usage of StealthX IDs and stealth addresses are designed to be simple and intuitive.
- **Affordability and Speed:** StealthX is built on the opBNB and BNB Blockchain, chosen for its fast and affordable transactions.
- **Bridge the Gap:** StealthX fills the gap between expensive and complex privacy solutions, such as Monero, and non-private transfers on transparent blockchains.
- **Wide Applicability:** StealthX's privacy solution can be applied to various use cases, benefiting individuals, businesses, and anyone concerned about privacy in transactions.

### ✒ Technical Description

The StealthX solution implements stealth addresses on the opBNB and BNB Blockchain using cryptographic techniques to ensure transaction security and user privacy. Key steps include:

1. **Stealth Addresses Generation:** Receiver generates a root spending key and computes a stealth meta-address using elliptic curve cryptography.
2. **Ephemeral Key Generation:** Sender generates an ephemeral key kept secret.
3. **Shared Secret Creation:** Sender combines their ephemeral key with the receiver’s stealth meta-address to create a shared secret.
4. **Ephemeral Public Key Publishing:** Sender creates and publishes an ephemeral public key.
5. **Transaction Process:** Sender sends funds to a stealth address derived from their ephemeral key and the receiver’s meta-address.
6. **Recipient’s Discovery:** Receiver scans for ephemeral public keys and tries to unlock special addresses using their spending key and shared secrets.

### 💻 Implementation

We started with a standard Hardhat project and added essential methods to the StealthAddress contract. The UI/UX was developed using React and TypeScript, focusing on a simple yet elegant design. We used the wagmi library for blockchain interactions and the elliptic library for elliptic curve computations.

**Tools Used:** Solidity, Hardhat, opBNB and BNB Blockchain, React, Typescript, Wagmi, and Metamask.

### 👥 Intended Users

The intended users of StealthX are anyone who values privacy in their transactions and wants to keep their identity hidden. This includes individuals, businesses, and anyone who wants to avoid the risks associated with revealing their identity in a transaction. StealthX is designed to be user-friendly for a wide range of users.

### ⚔ Challenges

The main challenge was designing the best possible user experience, which we believe the current implementation achieves. Another challenge was signing and sending withdrawal transactions without using the connected user wallet, resolved by creating a custom-built transaction broadcasted via public RPC URLs.

### 💹 Market Analysis

StealthX addresses a significant market opportunity by providing privacy in blockchain transactions. By offering a user-friendly and accessible solution, StealthX taps into a growing demand for privacy-enhancing tools in the blockchain space.

**Market Differentiation:** StealthX stands out by offering a simpler and more cost-effective solution compared to existing privacy-focused blockchains like Monero.

### ☄️ What's next?

- **Token and NFT Support:** Adding support for tokens and NFTs to enhance utility.
- **Cross-Chain Transactions:** Enabling cross-chain transactions.
- **Legal Compliance:** Obtaining a legal opinion on regulatory compliance.
- **User Experience Improvements:** Notifications for funds received and a mobile app.

### 🌟 Conclusion

StealthX is a user-friendly and innovative solution that addresses the growing need for privacy in blockchain transactions. By leveraging stealth addresses and the opBNB and BNB Blockchain, StealthX provides a simple and cost-effective way for users to keep their financial transactions private.

### 💪 Deployed Contract Addresses

**opBNB Testnet:**
- StealthAddress Contract: 0xe7f7067c9ecab27c5f7f13e02b13ed50931f6d0f

**BNB Testnet:**
- StealthAddress Contract: 0x677EE2AA9f5348980d38BA00B5E525a90FA2C50d



### 💻 Deploying StealthX on Local Machine

**Pre-requisites:**
- Node version should be >=16.0.0
- npm version should be >=9.0.0
- Receiver's Address should have some funds in their wallet

**Steps:**
1. Clone the repository.
2. Move into the frontend folder:
   ```bash
   cd frontend
   ```
3. Install dependencies using yarn or npm:
   ```bash
   yarn
   # or
   npm install
   ```
4. Start the development server:
   ```bash
   yarn start
   # or
   npm start
   ```
5. Build with production mode:
   ```bash
   yarn build
   # or
   npm run build
   ```

## Vision
A Community Empowering Mental Well-Being envisions a decentralized platform where individuals can freely express themselves, find support, and connect with one another.

## Description
**Spacetar** - A Decentralized Community Empowering Mental Well-Being. Spacetar is a mental health decentralized application (dApp) that provides a safe and supportive platform for individuals to freely express their thoughts, emotions, and experiences while being in 100% control of their data and privacy.

**Inspiration:** The concept for Spacetar emerged from a profound aspiration to revolutionize mental well-being support. We recognized the need for a decentralized solution that could foster a safe, nurturing environment for individuals to openly share their emotions and experiences.

**What it does:** Spacetar is a groundbreaking dApp that redefines the landscape of mental well-being support with features like a holistic dashboard, help rooms, reward points, and more.

**How we built it:** The development journey involved creating smart contracts, an intuitive user interface, and integrating various components.

**Challenges we ran into:** Overcoming complexities of blockchain technology, designing a seamless UI, and integrating components.

**Accomplishments:** Empowering mental well-being, innovative reward system, decentralized architecture, creating a supportive space.

**What we learned:** The transformative potential of blockchain, smart contract expertise, community-centric approach, practical blockchain application.

**What's next for Spacetar:** Expanded features, partnerships and outreach, research and innovation, user-centric evolution.

Join us in this transformative journey as we empower mental well-being, one connection and story at a time. Your voice matters, and Spacetar is here to amplify it.

# StealthX

## 📝 Project Description

### ✍ Project Overview

Hey there, privacy enthusiasts and blockchain explorers! Have you ever wished you could send and receive funds without anyone snooping around your business? Well, say hello to StealthX – your personal privacy guardian on the opBNB and BNB Blockchain. We’re tackling the issue of exposing personal info during transactions by introducing stealth addresses. In simple terms, StealthX lets you receive funds on the opBNB and BNB Blockchain without unveiling your real address.

The project draws inspiration from existing privacy-focused blockchains like Monero and tools like Tornado Cash, but aims to bridge the gap between complex and expensive privacy solutions and non-private transfers. It empowers users to maintain their privacy, fostering trust and security in the blockchain industry.

### 😎 Idea

Picture this: you’re in the world of blockchain, where transparency is the name of the game. But what if you could be like a digital ninja and keep your financial moves hidden? That’s where StealthX draws inspiration from cool privacy champs like Monero and Tornado Cash. They’re like those fancy gadgets spies use, but they can be a bit pricey and complicated. But wait, here’s the twist – we’re making privacy simple and accessible for everyone, just like your favorite comfort food.

Inspired by Vitalik’s article about “Stealth Addresses,” we’re crafting a tool that lets you go hidden while making transactions. And why opBNB and BNB, you ask? Well, it’s like the perfect partner in crime – fast and wallet-friendly transactions. And StealthX? It’s like your digital alter ego, keeping you anonymous while you make transactions. Cool, right?

### 📺 Background & Context

**Issue Addressed:** StealthX addresses the pressing concern of inadequate privacy in blockchain transactions. While the blockchain guarantees transparency and immutability, it simultaneously exposes sensitive details of transactions, such as sender and recipient addresses. This lack of privacy imposes significant risks on both individuals and businesses, potentially connecting their financial actions to real-world identities.

**Significance:** Addressing this issue assumes paramount importance due to its direct impact on safeguarding financial confidentiality. By introducing a user-centric solution that leverages stealth addresses for anonymous transactions, StealthX empowers users to regain control over their financial privacy and alleviate the potential pitfalls linked with identity exposure.

### ☄️ Value Proposition

- **Enhanced Privacy:** StealthX utilizes stealth addresses, allowing users to receive funds without revealing their real addresses. This provides a significant level of privacy for individuals and businesses, ensuring that their financial activities are shielded from prying eyes.
- **User-Friendly Solution:** StealthX aims to be accessible and user-friendly for both power users and non-power users. The generation and usage of StealthX IDs and stealth addresses are designed to be simple and intuitive.
- **Affordability and Speed:** StealthX is built on the opBNB and BNB Blockchain, chosen for its fast and affordable transactions.
- **Bridge the Gap:** StealthX fills the gap between expensive and complex privacy solutions, such as Monero, and non-private transfers on transparent blockchains.
- **Wide Applicability:** StealthX's privacy solution can be applied to various use cases, benefiting individuals, businesses, and anyone concerned about privacy in transactions.

### ✒ Technical Description

The StealthX solution implements stealth addresses on the opBNB and BNB Blockchain using cryptographic techniques to ensure transaction security and user privacy. Key steps include:

1. **Stealth Addresses Generation:** Receiver generates a root spending key and computes a stealth meta-address using elliptic curve cryptography.
2. **Ephemeral Key Generation:** Sender generates an ephemeral key kept secret.
3. **Shared Secret Creation:** Sender combines their ephemeral key with the receiver’s stealth meta-address to create a shared secret.
4. **Ephemeral Public Key Publishing:** Sender creates and publishes an ephemeral public key.
5. **Transaction Process:** Sender sends funds to a stealth address derived from their ephemeral key and the receiver’s meta-address.
6. **Recipient’s Discovery:** Receiver scans for ephemeral public keys and tries to unlock special addresses using their spending key and shared secrets.

### 💻 Implementation

We started with a standard Hardhat project and added essential methods to the StealthAddress contract. The UI/UX was developed using React and TypeScript, focusing on a simple yet elegant design. We used the wagmi library for blockchain interactions and the elliptic library for elliptic curve computations.

**Tools Used:** Solidity, Hardhat, opBNB and BNB Blockchain, React, Typescript, Wagmi, and Metamask.

### 👥 Intended Users

The intended users of StealthX are anyone who values privacy in their transactions and wants to keep their identity hidden. This includes individuals, businesses, and anyone who wants to avoid the risks associated with revealing their identity in a transaction. StealthX is designed to be user-friendly for a wide range of users.

### ⚔ Challenges

The main challenge was designing the best possible user experience, which we believe the current implementation achieves. Another challenge was signing and sending withdrawal transactions without using the connected user wallet, resolved by creating a custom-built transaction broadcasted via public RPC URLs.

### 💹 Market Analysis

StealthX addresses a significant market opportunity by providing privacy in blockchain transactions. By offering a user-friendly and accessible solution, StealthX taps into a growing demand for privacy-enhancing tools in the blockchain space.

**Market Differentiation:** StealthX stands out by offering a simpler and more cost-effective solution compared to existing privacy-focused blockchains like Monero.

### ☄️ What's next?

- **Token and NFT Support:** Adding support for tokens and NFTs to enhance utility.
- **Cross-Chain Transactions:** Enabling cross-chain transactions.
- **Legal Compliance:** Obtaining a legal opinion on regulatory compliance.
- **User Experience Improvements:** Notifications for funds received and a mobile app.

### 🌟 Conclusion

StealthX is a user-friendly and innovative solution that addresses the growing need for privacy in blockchain transactions. By leveraging stealth addresses and the opBNB and BNB Blockchain, StealthX provides a simple and cost-effective way for users to keep their financial transactions private.

### 💪 Deployed Contract Addresses

**opBNB Testnet:**
- StealthAddress Contract: 0xe7f7067c9ecab27c5f7f13e02b13ed50931f6d0f

**BNB Testnet:**
- StealthAddress Contract: 0x677EE2AA9f5348980d38BA00B5E525a90FA2C50d

### 🚫 License

This repository includes an unlicensed statement.

### 💻 Deploying StealthX on Local Machine

**Pre-requisites:**
- Node version should be >=16.0.0
- npm version should be >=9.0.0
- Receiver's Address should have some funds in their wallet

**Steps:**
1. Clone the repository.
2. Move into the frontend folder:
   ```bash
   cd frontend
   ```
3. Install dependencies using yarn or npm:
   ```bash
   yarn
   # or
   npm install
   ```
4. Start the development server:
   ```bash
   yarn start
   # or
   npm start
   ```
5. Build with production mode:
   ```bash
   yarn build
   # or
   npm run build
   ```
```


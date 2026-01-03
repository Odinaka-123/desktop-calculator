# Calculator App

**Version:** 1.0.0  
**Download:** [Calculator Setup.exe](https://github.com/Odinaka-123/desktop-calculator/releases/latest/download/Calculator%20Setup.exe)

A **modern desktop calculator app** built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Electron 26**.  
This project demonstrates how to convert a React/Next.js web app into a production-ready desktop application.

---

## Features

- Perform basic arithmetic operations: `+`, `-`, `×`, `÷`  
- Clean and responsive UI built with **Tailwind CSS**  
- Cross-platform desktop app (Windows via `.exe`)  
- Easy to customize and extend for additional functionality  
- Lightweight and fast  

---

## Tech Stack

- **Next.js 16** – React-based framework for web and static export  
- **React 19** – UI components and interactivity  
- **Tailwind CSS 4** – Utility-first styling  
- **Electron 26** – Wraps web app into a desktop application  
- **Electron Builder** – Generates Windows installer `.exe`  

---

## Installation (Source Code)

Clone the repository:

```bash
git clone https://github.com/Odinaka-123/desktop-calculator.git
cd calculator
npm install
Development
Run the app in development mode with live reloading:

bash
Copy code
npm run electron-dev
Opens the app in a desktop window while Next.js runs in dev mode

Build (Production)
Generate the Windows installer .exe:

bash
Copy code
npm run electron-pack
The .exe will appear in the release/ folder

Ensure your .gitignore is set to ignore release/ and out/

Usage
Install the .exe from the release link

Launch the Calculator app on Windows

Perform basic calculations with a clean and intuitive UI

Screenshots
(Add your screenshots here if you want)

Versioning
Current Version: 1.0.0

Stable first release with core calculator features

License
Apache License

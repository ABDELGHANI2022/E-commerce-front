# E-Commerce React App

- [E-Commerce React App](#e-commerce-react-app)
  - [Description](#description)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Run](#run)
  - [Available Commands](#available-commands)
  - [References](#references)


## Description 

A modern e-commerce web application built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. This project demonstrates a responsive and user-friendly online store with product listing, cart management, and a checkout page.

---

##  Features

- Dynamic product listing from static data
- Detailed product view page
- Shopping cart with add/remove functionality
- Checkout page structure
- Modular and reusable component architecture
- Fully responsive design with Tailwind CSS

---

## Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Context API](https://reactjs.org/docs/context.html)

---

## Project Structure

```bash
E-commerce-project/
├── src/
│    ├── components/
│    │ ├── CartItem.tsx # Individual cart item
│    │ ├── Footer.tsx # Footer component
│    │ ├── Header.tsx # Header with navigation
│    │ └──  ProductCard.tsx # Reusable product card
│    ├── context/
│    │ └── CartContext.tsx # Cart context
│    ├── data/
│    │ └── products.ts # Product data
│    ├── pages/
│    │ ├── Cart.tsx # Cart page
│    │ ├── Checkout.tsx # Checkout page
│    │ ├── Home.tsx # Homepage
│    │ ├── ProductDetail.tsx # Product detail page
│    │ └── Products.tsx # Product listing page
│    ├── App.tsx # Main component
│    ├── index.css # Global styles
│    └── index.tsx # Entry point
│    
├── index.html
├── README.md
└── ... # Configuration files
```

## Prérequis
[![React](https://img.shields.io/badge/-React_18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/-Vite_4+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## Installation
```bash
npm install
```

## Run 
```bash
npm run dev
```

## Available Commands

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start development server   |
| `npm run build`   | Create production build    |
| `npm run preview` | Preview production build   |
| `npm run lint`    | Run linter (if configured) |



## References

[![React Docs](https://img.shields.io/badge/-React_Docs-61DAFB?logo=react&logoColor=white)](https://reactjs.org/docs)
[![Vite Docs](https://img.shields.io/badge/-Vite_Docs-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/guide/)
[![TypeScript Docs](https://img.shields.io/badge/-TypeScript_Docs-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![Tailwind Docs](https://img.shields.io/badge/-Tailwind_Docs-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/docs)

**Learning Resources:**
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Frontend Masters: React Course](https://frontendmasters.com/courses/react-v5/)
- [Vite Crash Course](https://www.youtube.com/watch?v=LQQ3CR2JTX8)
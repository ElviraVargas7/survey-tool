# 📝 Survey Platform - Next.js App

This project is a survey platform built with **Next.js**, **Redux Toolkit**, and **Material UI**, allowing members to respond to questions and generate downloadable analysis reports.

---

## 🚀 Features

- ✅ Member creation with validation
- ✅ Interactive surveys with rating questions
- ✅ Average result calculations
- ✅ Conditional rendering based on responses
- ✅ PDF report download
- ✅ SASS styling for full UI customization

---

## 📁 Project Structure

/app
└── HomePage.jsx (HomePage)
└── survey/[memberGuid]/page.jsx (SurveyPage)

/components
└── ActionsButtons
└── MemberInput
└── MembersTable
└── Question
└── QuestionAverage

/axios
└── api.js

/redux
├── actions/
├── reducers/
└── reducer.js

/scss
└── \*.scss

---

## 🛠 Tech Stack

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| Next.js       | React framework (SSR, routing) |
| Redux Toolkit | Global state management        |
| Material UI   | Pre-built UI components        |
| SASS (SCSS)   | Custom component styling       |
| Axios         | API integration                |
| UUID          | Unique member generation       |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/ElviraVargas7/survey-tool.git
cd survey-tool

# Install dependencies
npm install
# or
yarn install
```

## ✨ Running the App

# Development

npm run dev

# or

yarn dev

Visit: http://localhost:3000

## Usage Overview

🎯 HomePage (/)
View and create members
See list of current members
View average results (if survey is completed)

🧑‍💼 SurveyPage (/survey/[memberGuid])
Render all questions dynamically
Each member can only submit once
Submit button is enabled when all questions are answered

## Environment Variables

Create a .env.local file:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Adjust according to the backend endpoint.

## 👨‍💻 Author

Developed by Elvira Vargas 😸

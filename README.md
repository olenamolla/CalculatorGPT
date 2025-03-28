# CalculatorGPT

CalculatorGPT is a web-based calculator built with **Next.js**, **React**, and **Tailwind CSS**. It supports basic arithmetic, trigonometric functions, logarithmic/exponential operations, and power operations. It evaluates user-entered expressions by sending them to OpenAI's API for computation.

---

## 🚀 Features

- ✅ Basic arithmetic: `+`, `-`, `*`, `/`
- ✅ Trigonometric functions: `sin`, `cos`, `tan`
- ✅ Logarithmic & exponential: `log`, `exp`
- ✅ Power operator: `^`
- ✅ Parentheses support: `(` and `)`


---

## 🧪 Example Expressions

| Expression         | Description                      | Expected Output      |
|--------------------|----------------------------------|-----------------------|
| `2+3*4`            | Order of operations              | `14`                  |
| `(2+3)*4`          | With parentheses                 | `20`                  |
| `2^3`              | Power operator                   | `8`                   |
| `log(100)`         | Log base 10                      | `2`                   |
| `exp(2)`           | e^2                              | `7.389056...`         |
| `sin(30 deg)`      | Sine in degrees (see note below) | `0.5` (approx.)       |

> 🔧 **Note:** Trig functions are evaluated in **radians** by default.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (React), Tailwind CSS
- **Backend API:** OpenAI GPT for expression evaluation

---

## 🧑‍💻 Running Locally

To run this project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/calculator-gpt
   cd calculator-gpt

   npm install

   npm run dev

   http://localhost:3000
```

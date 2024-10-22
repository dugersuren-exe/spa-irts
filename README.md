## git рүү өөрийн файлаа хадгалах зарим командууд

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USER_ACCOUNT/spa-irts.git
git push -u origin main
git status

```


## Алхам 1: Шинэ React апп үүсгэх

### Frontend-ийг үүсгэхдээ 

React App (CRA)-ийг TypeScript-тэй ашиглахын тулд дараах командыг терминал дээр ажиллуулна:

```
npx create-react-app spa-irts --template typescript

```

### Тайлбар

Дээрх командын **spa-irts** гэсэн нэрний оронд өөрийн үүсгэх app-ий нэрийг бичиж оруулна.

Энэ нь spa-irts нэртэй шинэ React апп үүсгэх ба TypeScript дэмжлэгтэйгээр тохируулагдсан байна.


### Аппын фолдер руу ор

```
cd my-app
```


## Алхам 2: Tailwind CSS суулгах

Tailwind CSS-ийг React аппд суулгаж тохируулахын тулд дараах алхамуудыг дагана:

1. Tailwind болон шаардлагатай нэмэлт багцуудыг суулгана:

```
npm install -D tailwindcss postcss autoprefixer
```

2. Tailwind-ийн тохиргооны файлыг үүсгэнэ:

```
npx tailwindcss init
```

3. tailwind.config.js файлд дараахыг нэм:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Tailwind-ийн үндсэн CSS-ийг src/index.css файлд нэм:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Эдгээр үйлдлүүдийг хийснээр tailwindcss -ийн тусламжтайгаар форматлах боломжтой болно.



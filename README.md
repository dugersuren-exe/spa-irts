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


## Алхам 3: Redux болон Redux Thunk суулгах

Redux болон Thunk-ийг TypeScript-тэй ашиглахын тулд дараах багцуудыг суулгана:

1. Redux болон холбогдох нэмэлт багцыг суулгана:

```
npm install @reduxjs/toolkit react-redux redux-thunk
```

2. TypeScript-д зориулсан төрлүүдийг суулгана:

```
npm install @types/react-redux

```

## Алхам 4: Store, Reducers болон Actions үүсгэх

1. Store үүсгэх: src/store/store.ts файл үүсгээд дараах байдлаар тохируул:

```
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Reducer-үүдийг импортлоно

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```

2. Reducers үүсгэх: Жишээ нь, src/store/reducers/counterReducer.ts файл үүсгээд дараах байдлаар reducer-ийг тохируул:

```
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

```

3. Root Reducer үүсгэх: src/store/reducers/index.ts файл үүсгээд бүх reducer-үүдийг нэгтгэнэ:

```
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

```

4. Thunk ашиглах: src/store/actions/counterActions.ts файл үүсгээд async үйлдэл хийх Thunk-г дараах байдлаар үүсгэж болно:

```
import { AppDispatch } from '../store';
import { increment } from '../reducers/counterReducer';

export const incrementAsync = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

```

## Алхам 5: Store-г App-т холбох

1. src/index.tsx файлд Store-г React аппд холбохын тулд Provider-ийг ашиглана:

```
src/index.tsx
```

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

```
# Router-ийг ашиглах (Цэс үүсгэх)

React-ийн доторх route-ийг зохион байгуулахдаа ихэвчлэн react-router-dom ашиглаж, олон хуудастай веб аппликейшн үүсгэдэг. Route -ийг зохион байгуулахдаа дараах алхамуудыг дагаарай.

1. Алхам 1: react-router-dom суулгах

Эхлээд React-д зориулсан react-router-dom багцыг суулгана:

```
npm install react-router-dom
```

2. Алхам 2: Дуудах хуудсуудаа үүсгэх

Pages фолдер үүсгэх: Олон хуудсыг зохион байгуулахын тулд pages гэсэн фолдер үүсгэж, хуудсуудыг тус бүрд нь оруулна. Жишээ нь:

* src/pages/Home.tsx
* src/pages/Counter.tsx
* src/pages/About.tsx
* src/pages/NotFound.tsx

Home.tsx: Жишээ нь Home компонент:

```
src/pages/Home.tsx
```

```
import React from 'react'

function Home() {


    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    )
}

export default Home;
```

Мөн бид redux -ийг турших кодыг Counter.tsx файл дээр гүйцэтгэж үзье: Жишээ нь Counter компонент үүсгэж дотор нь дараах кодыг бичье.


```
src/pages/Counter.tsx
```

```
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../store/reducers/counterReducer';
// import { incrementAsync } from '../store/actions/counterActions';


function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <div className="text-4xl font-bold">{count}</div>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded mt-2"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter;
```


About.tsx: Жишээ нь About компонент:

```
src/pages/About.tsx
```

```
import React from 'react'

function About() {


    return (
        <div>
            <h1>About Page</h1>
            <p>Welcome to the About page!</p>
        </div>
    )
}

export default About;
```

NotFound.tsx: Жишээ нь 404 алдааны хуудас:

```
src/pages/NotFound.tsx
```


```
import React from 'react'

function NotFound() {


    return (
        <div>
            <h1>NotFound Page</h1>
            <p>Welcome to the NotFound page!</p>
        </div>
    )
}

export default NotFound;
```

Цэсний хэсгийг оруулах

```
src/components/Navbar.tsx
```


```
import React from 'react'
import { Link } from 'react-router-dom';

export function Navbar() {
    

    return (
        <ul className="flex space-x-4 p-4 bg-gray-200">
        <li>
          <Link className="text-blue-500" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-blue-500" to="/counter">Counter</Link>
        </li>
        <li>
          <Link className="text-blue-500" to="/about">About</Link>
        </li>
      </ul>
    )
}

```


4. 
5.  
6.  
7.  
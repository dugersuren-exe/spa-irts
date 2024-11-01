import React from 'react'
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//import { setLanguage } from './languageSlice';

function Home() {
    const { t } = useTranslation();

    const { i18n } = useTranslation();
    const dispatch = useDispatch();
  
    const changeLanguage = (lang: string) => {
      i18n.changeLanguage(lang);
      //dispatch(setLanguage(lang)); // Redux-д хэлний сонголтыг хадгалах
    };

    return (
        <div>
             <button onClick={() => changeLanguage('en')}>English</button>
             <button onClick={() => changeLanguage('mn')}>Монгол</button>
            <h1>Ирц бүртгэлийн систем</h1>
            <p>Нүүр хуудас!</p>
            <h1>{t('welcome')}</h1>
            <p>{t('hello', { name: 'Alice' })}</p>
        </div>
    )
}

export default Home;
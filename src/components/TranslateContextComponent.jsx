import React, { useContext, Suspense } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useTranslation } from 'react-i18next'

const translatioinsBg = {
  етикиращиМашини: 'Етикиращи машни',
  дозиращиМашини: 'Дозиращи машни',
  sts808: 'Етикираща машина <br/><strong>STS808</strong>',
  sts810: 'Етикираща машина <br/><strong>STS810</strong>',
  sts816: 'Етикираща машина <br/><strong>STS816</strong>',
  calc808: 'Изчисляване параметрите за етикираща машина STS 810',
  label1: '1 етикет',
  label2: '2 етикета',
  ЛентаСЕтикети: 'Лента с етикети',
  Етикет: 'Етикет',
  Съд: 'Съд',
  ПроцепМуЕтикет: 'Процеп между етикетите',
  Дължина: 'Дължина между етикетите',
  ДиаметърСъд: 'Диаметър на съда',
  ОфсетСтоп: 'Офсет стоп',
  Време: 'Време <br/> (Препоръчително)',
  ЕтикетПреден: 'Преден етикет',
  ЗаденЕтикет: 'Заден етикет'

}
const translationsEn = {
  етикиращиМашини: 'Labeling Machines',
  дозиращиМашини: 'Dosing Machines',
  sts808: 'Labeling machine <br/><strong>STS808</strong>',
  sts810: 'Labeling machine <br/><strong>STS810</strong>',
  sts816: 'Labeling machine <br/><strong>STS816</strong>',
  calc808: 'Parameters calculation for labeling machine STS 808',
  label1: '1 Label',
  label2: '2 Labels',
  ЛентаСЕтикети: 'Label bar',
  Етикет: 'Label',
  Съд: 'Container',
  ПроцепМуЕтикет: 'Labels gap',
  Дължина: 'Label length',
  ДиаметърСъд: 'Diameter of the container', 
  ОфсетСтоп: 'Offset stop',
  Време: 'Time move motor <br/> (Recommended)',
  ЕтикетПреден: 'Front Label',
  ЗаденЕтикет: 'Back Label'
}

i18n.use(initReactI18next).init({
  resources: {
    bg: { translation: translatioinsBg },
    en: { translation: translationsEn }
  },
  lng: 'bg',
  fallbackLng: 'bg',
  interpolation: { escapeValue: false }
})

export default function TranslateContextComponent() {}

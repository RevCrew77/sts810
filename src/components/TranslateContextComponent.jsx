import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translatioinsBg = {
  "етикиращиМашини": 'Етикетиращи машни',
  "дозиращиМашини": 'Дозиращи машни',
  "sts808": 'Етикетираща машина <br/><strong>STS808</strong>',
  "sts810": 'Етикетираща машина <br/><strong>STS810</strong>',
  "sts816": 'Етикетираща машина <br/><strong>STS816</strong>',
  "calc808": 'Изчисляване параметрите за етикетираща машина STS 808',
  "label1": '1 етикет', 
  "label2": '2 етикета',
  "ЛентаСЕтикети": 'Лента с етикети',
  "Етикет": 'Етикет',
  "Съд": 'Съд',
  "ПроцепМуЕтикет": 'Процеп между етикетите',
  "Дължина": 'Дължина на етикетите',
  "ДиаметърСъд": 'Диаметър на съда',
  "ОфсетСтоп": 'Офсет стоп',
  "ОфсетСтоп1": 'Офсет стоп 1',
  "Време": 'Време <br/> (Препоръчително)',
  "ЕтикетПреден": 'Преден етикет',
  "ЗаденЕтикет": 'Заден етикет',
  "ДължинаПреденЕтикет": 'Дължина преден етикет',
  "ДължинаЗаденЕтикет": 'Дължина заден етикет',
  "РазстояниеМуЕтикети": 'Разстояние между етикетите',
  "ОфсетСтопБ": 'Офсет стоп 2',
  "calc810a": 'Изчисляване на параметрите за етикетираща машина STS 810',
  "sts809": 'Дозираща машина <br/> <strong>STS809</strong>',
  "sts812": 'Дозираща машина <br/> <strong>STS809</strong>',
  "sts811G": 'Дозираща машина <br/> <strong>STS809</strong>',
  "sts813G": 'Дозираща машина <br/> <strong>STS809</strong>',
  "calc816a": 'Изчисляване на параметрите за етикетираща машина STS 816'


}
const translationsEn = {
  "етикиращиМашини": 'Labeling Machines',
  "дозиращиМашини": 'Dosing Machines',
  "sts808": 'Labeling machine <br/><strong>STS808</strong>',
  "sts810": 'Labeling machine <br/><strong>STS810</strong>',
  "sts816": 'Labeling machine <br/><strong>STS816</strong>',
  "calc808": 'Parameters calculation for labeling machine STS 808',
  "label1": '1 Label',
  "label2": '2 Labels',
  "ЛентаСЕтикети": 'Label bar',
  "Етикет": 'Label',
  "Съд": 'Container',
  "ПроцепМуЕтикет": 'Labels gap',
  "Дължина": 'Label length',
  "ДиаметърСъд": 'Diameter of the container', 
  "ОфсетСтоп": 'Offset stop',
  "ОфсетСтоп1": 'Offset stop 1',
  "Време": 'Time move motor <br/> (Recommended)',
  "ЕтикетПреден": 'Front Label',
  "ЗаденЕтикет": 'Back label',
  "ДължинаПреденЕтикет": 'Front label length',
  "ДължинаЗаденЕтикет": 'Back label length',
  "РазстояниеМуЕтикети": 'Space between labels',
  "ОфсетСтопБ": 'Offset stop 2',
  "calc810a": 'Parameters calculation for labeling machine STS 810',
  "sts809": 'Dosing machine <br/> <strong>STS809</strong>',
  "sts812": 'Dosing machine <br/> <strong>STS809</strong>',
  "sts811G": 'Dosing machine <br/> <strong>STS809</strong>',
  "sts813G": 'Dosing machine <br/> <strong>STS809</strong>',
  "calc816a": 'Parameters calculation for labeling machine STS 816'
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

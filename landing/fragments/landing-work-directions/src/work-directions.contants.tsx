import React         from 'react'

import { Cube }      from '@ui/3d-elements'
import { Cylinder }  from '@ui/3d-elements'
import { Diamond }   from '@ui/3d-elements'
import { Isosphere } from '@ui/3d-elements'
import { Pyramid }   from '@ui/3d-elements'
import { Ring }      from '@ui/3d-elements'
import { Sphere }    from '@ui/3d-elements'
import { Pill }      from '@ui/3d-elements'

const elementStyle = { width: 200, height: 140 }

export const elements = {
  RU: {
    'Медиа контент': <Cylinder style={elementStyle} />,
    'Digital сервисы': <Ring style={elementStyle} />,
    'Мобильные приложения': <Isosphere style={elementStyle} />,
    'ICO и блокчейн проекты': <Diamond style={elementStyle} />,
    'Рекламные агенства': <Sphere style={elementStyle} />,
    'Интернет магазины': <Cube style={elementStyle} />,
    Стартапы: <Pill style={elementStyle} />,
    'IT-компании': <Pyramid style={elementStyle} />,
  },
  EN: {
    'Media content': <Cylinder style={elementStyle} />,
    'Digital services': <Ring style={elementStyle} />,
    'Mobile apps': <Isosphere style={elementStyle} />,
    'ICO&Blockchain projects': <Diamond style={elementStyle} />,
    'Advertising agencies': <Sphere style={elementStyle} />,
    'Online shops': <Cube style={elementStyle} />,
    Startups: <Pill style={elementStyle} />,
    'IT companies': <Pyramid style={elementStyle} />,
  },
}

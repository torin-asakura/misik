import { GroundStatus } from './grounds-status.interface'

export const groundsStatusMock: GroundStatus[] = [
  {
    id: '1',
    title: 'Мотивированный страх преследования',
    description:
      'По расовым, религиозным, национальным мотивам, признакам принадлежности к социальным группам и меньшинствам, политическим взглядам в случае возвращения в страну гражданства.',
  },
  {
    id: '2',
    title: 'Опасность для жизни или нарушение прав',
    description:
      'Когда есть опасность для жизни, безопасности или свободы вследствие преступлений, насилия над личностью, агрессии, внутренних гражданских конфликтов в стране, массового нарушения прав человека и др.',
  },
  {
    id: '3',
    title: 'Отсутствие страны гражданства',
    description:
      'Также непризнание страной своего гражданина. Если в период вашего нахождения в Мексике в стране гражданства произошли события, в результате которых ваша страна больше не существует.',
  },
  {
    id: '4',
    title: 'Это ваш личный выбор',
    description:
      'Чтобы просить убежище, не обязательно иметь в жизни серьёзные происшествия, вынуждающие вас срочно покинуть страну. Это вид иммиграции, который отличается от других лишь документами и процедурой прохождения.',
  },
]
const labelToHref = {
  services: '#services',
  'work format': '#work_format',
  reviews: '#reviews',
  contacts: '/contacts',
  услуги: '#services',
  'формат работы': '#work_format',
  отзывы: '#reviews',
  контакты: '/contacts',
}

const mapHref = (items) =>
  items.map((item) => ({ ...item, href: labelToHref[item?.label?.toLowerCase()] }))

export { mapHref }

[...Array(15).keys()].map((el) => (
  { 
    id: el, 
    title: 'Текст №${el}', 
    body: 'At vero eos et accusamus et iusto odio dignissimos', 
  }
))

export const getMocks = () => {
  const mockData = []

  for (let i = 1; i <= 2; i++) {
    const getRandom = () => (Math.random() * 1000).toFixed()

    const newMockData = {
      title: `Текст № ${getRandom()}${getRandom()}-${getRandom()}_${getRandom()}_успешн`,
      body: 'At vero eos et accusamus et iusto odio dignissimos', 
    }
    mockData.push(newMockData)
  }

  return mockData
}

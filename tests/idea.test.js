import { idea } from '../src/idea'

describe('an idea', () => {
  test('it should have a title', () => {
    const title = 'a title'
    const newIdea = new idea({title})

    expect(newIdea.title).toBe(title)
  })

  test('it should have a body', () => {
    const body = 'a body'
    const newIdea = new idea({body})

    expect(newIdea.body).toBe(body)
  })

  test('it should have an id', () => {
    const body = 'a body'
    const newIdea = new idea({body})

    expect(newIdea.id).toBeTruthy()
  })

  test('it should be able to return a summary', () => {
    const title = 'a title'
    const body = 'a body'
    const newIdea = new idea({title, body})

    expect(newIdea.getSummary()).toEqual(`${title} - ${body}`)
  })
})

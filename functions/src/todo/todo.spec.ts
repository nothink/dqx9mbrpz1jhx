// todo.service.spec.ts

import { TodoService } from './todo.service'

describe('TodoService', () => {
  let service: TodoService

  beforeEach(() => {
    service = new TodoService()
  })

  describe('giveMeANumber', () => {
    test('when value is true, then should return true', () => {
      expect(true).toBe(true)
    })

    it('should return 5, when given parameter is 5', () => {
      const number = service.giveMeANumber(5)

      expect(number).toBe(5)
    })
  })
})

import helpers from '../helpers'

describe('helpers', () => {
  describe('#isNumber', () => {
    it('returns true if the input contains all numbers', () => {
      const input = '123412312344'

      expect(helpers.isNumber(input)).toBe(true)
    })

    it('returns false if the input does not contain all numbers', () => {
      const input = 'hello12345'

      expect(helpers.isNumber(input)).toBe(false)
    })
  })
})

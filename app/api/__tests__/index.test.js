
import { getWorkoutSelections } from '../'

describe('Testing Workout Selection', () => {
  test('Gets single workout plan', async () => {
    const plan = await getWorkoutSelections('515a16b6-0cf6-4af7-b68d-f29fd5335725')
    const planName = '12-week Go Dumb Plan'
    const res = plan.planname

    expect(res).toBe(planName)
  })
})
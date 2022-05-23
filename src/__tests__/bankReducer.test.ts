import { ActionType } from "../state/actions/action-types"
import { bankReducer } from "../state/reducers/bankReducer"



test('should add 100 when deposit 100', () => {
    expect(bankReducer(undefined, {type: ActionType.DEPOSIT, payload: 100})).toEqual(
      {
        value: 100
      }
    )
  })

  test('should substract 100 when withdraw 100', () => {
    expect(bankReducer(undefined, {type: ActionType.WITHDRAW, payload: 100})).toEqual(
      {
        value: -100
      }
    )
  })

test('should return 0 when bankrupt', () => {
    expect(bankReducer(undefined, {type: ActionType.BANKRUPT})).toEqual(
      {
        value: 0
      }
    )
  })
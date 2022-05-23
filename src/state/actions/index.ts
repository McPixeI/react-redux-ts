export type Action = {
    type: 'deposit'
    payload: number
  } | {
    type: 'withdraw'
    payload: number
  } | {
    type: 'bankrupt'
  }
  
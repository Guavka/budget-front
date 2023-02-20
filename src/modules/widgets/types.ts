export type VButtonsSize = 'x-small' | 'small' | 'large' | 'x-large'

export interface AccountMenuData {
  initials: string,
  fullName: string,
  email: string,
  avatar?: string
}

export type ScoreType = 'credit' | 'deposit' | 'money' | 'card'
export type CurrencyType = 'USD' | 'UAH' | 'RUB'

export interface ScoreData {
  name: string,
  type: ScoreType,
  balance: number,
  currency: CurrencyType
}

export interface CategoryDataResponse {
  name: string,
  icon: string
}

export interface OperationDataResponse {
  scoreId: string,
  category: CategoryDataResponse,
  type: string,
  moneyValue: string,
  date: string,
  place: string,
  comment: string,
}

export interface ScoreDataResponse {
  name: string,
  type: string,
  currency: string,
  moneyValue: string,
  operations: OperationDataResponse[]
}

export interface PlanDataResponse {
  name: string,
  duration: string,
  cost: string
}

export interface UserDataResponse {
  id: string,
  plan: PlanDataResponse,
  firstName: string,
  lastName: string,
  age: string,
  email: string,
  scores: ScoreDataResponse[]
}

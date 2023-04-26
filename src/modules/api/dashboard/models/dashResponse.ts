export interface CategoryResponse {
  name: string,
  icon: string
}

export interface OperationResponse {
  scoreId: string,
  category: CategoryResponse,
  type: string,
  moneyValue: string,
  date: string,
  place: string,
  comment: string,
}

export interface ScoreResponse {
  name: string,
  type: string,
  currency: string,
  moneyValue: string,
  operations: OperationResponse[]
}

export interface PlanResponse {
  name: string,
  duration: string,
  cost: string
}

export interface UserResponse {
  id: string,
  plan: PlanResponse,
  firstName: string,
  lastName: string,
  age: string,
  email: string,
  scores: ScoreResponse[]
}

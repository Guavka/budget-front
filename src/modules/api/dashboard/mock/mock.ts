import {
  CategoryResponse, OperationResponse, ScoreResponse, PlanResponse, UserResponse,
} from '../models/dashResponse';

const salaryCategory: CategoryResponse = {
  icon: 'mdi-cash-100',
  name: 'Salary',
};

const healthCategory: CategoryResponse = {
  icon: 'mdi-bottle-tonic-plus',
  name: 'Health',
};

export const operation1: OperationResponse = {
  category: salaryCategory,
  comment: '',
  date: '21.04.2022',
  moneyValue: '500',
  place: '',
  type: 'add',
  scoreId: '0',
};

export const operation2: OperationResponse = {
  category: healthCategory,
  comment: '',
  date: '22.04.2022',
  moneyValue: '250',
  place: 'doping',
  type: 'subtract',
  scoreId: '0',
};

export const scoresMock: ScoreResponse[] = [
  {
    currency: 'RUB',
    moneyValue: '0',
    name: 'My money',
    type: 'money',
    operations: [
      operation1,
      operation2,
    ],
  },
  {
    currency: 'USD',
    moneyValue: '1000',
    name: 'Cars money',
    type: 'money',
    operations: [],
  }];

export const planMock: PlanResponse = {
  duration: '-1',
  name: 'Base',
  cost: '0',
};

export const userMock: UserResponse = {
  id: '2',
  age: '29',
  email: 'guavka@gmail.com',
  firstName: 'Aleksey',
  lastName: 'Martynov',
  plan: planMock,
  scores: scoresMock,
};

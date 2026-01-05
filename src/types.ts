
export enum HollandType {
  R = 'R', // 现实型 Realistic
  I = 'I', // 研究型 Investigative
  A = 'A', // 艺术型 Artistic
  S = 'S', // 社会型 Social
  E = 'E', // 企业型 Enterprising
  C = 'C', // 常规型 Conventional
}

export type AnswerType = 'BINARY' | 'RATING';

export interface Question {
  id: number;
  type: HollandType;
  typeName: string;
  text: string;
  answerFormat: AnswerType;
}

export interface ScoreMap {
  [HollandType.R]: number;
  [HollandType.I]: number;
  [HollandType.A]: number;
  [HollandType.S]: number;
  [HollandType.E]: number;
  [HollandType.C]: number;
}

export interface HollandDescription {
  type: HollandType;
  name: string;
  traits: string;
  careers: string;
  advice: string;
}

export
declare interface Identifiable {
  id?: any;
}

export
declare interface ITodo extends Identifiable {
  title: string,
  description: string,
  isFinished: boolean,
  order: number
}
// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. 
// Як параметр типу повинен обов'язково виступати функціональний тип.

type ReturnTypeFunction<T> = T extends (...args: any[]) => infer R ? R : never;


function add(a: number, b: number): number {
  return a + b;
}

type AddInfo = ReturnTypeFunction<typeof add>  

function welcome(name: string): string {
  return `Hello, ${name}!`;
}

type WelcomeInfo = ReturnTypeFunction<typeof welcome> 



// Вам потрібно створити умовний тип, який приймає функціональний тип 
// з одним параметром (або задовільним) та повертає кортеж,
//  де перше значення - це тип, що функція повертає, а другий - тип її параметру


// type FunctionInfo<T> = T extends (param: infer P) => infer R ? [R, P] : never;
type FunctionInfo<T> = T extends (param: infer ParamType) => infer ReturnType ? [ReturnType, ParamType]: never;

function greetInfo(name: string): string {
  return `Hello, ${name}!`;
}

type GreetInfo = FunctionInfo<typeof greetInfo>;


function multiply(a: number): number {
  return a * 5;
}

type MultiplyInfo = FunctionInfo<typeof multiply>;


function exampleFunction(y: string): boolean {
  return y.length > 7;
}

type Info = FunctionInfo<typeof exampleFunction>





type LHS<TProps> = 
    | `-o ${keyof TProps & string} -s ${string}`
    | `-o ${keyof TProps & string} ${keyof TProps & string} -s ${string}`

interface Model{
    msg1: string,
    msg2: string,
}

type Expr<TProps> = Partial<{[key in LHS<TProps>] : any}>;

const test: Expr<Model> = {
    '-o msg1 msg2 -s hello': {
        
    }
}
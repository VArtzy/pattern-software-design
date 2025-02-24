export interface Animal {
    speak(): void    
}

/**
    * @deprecated
*/
export class Tiger implements Animal {
    speak(): void {
        console.log("Roar!")
    }
}

export class Tiger2 implements Animal {
    speak(): void {
        console.log("Roar!")
    }
}

export class Cat implements Animal {
    speak(): void {
        console.log("Meow")
    }
}

export class Dog implements Animal {
    speak(): void {
        console.log("Gug gug")
    }
}

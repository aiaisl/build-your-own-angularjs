function sayHello(to: string) {
    return _.template("Hello, <%= name %>!")({
        name: to
    })
}
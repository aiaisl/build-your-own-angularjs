describe('Scope', ()=> {
    it("Can be constructed and used ad an object", ()=> {
        let scope = new Scope();
        scope.aProperty = 1;
        expect(scope.aProperty).toBe(1);
    })
})
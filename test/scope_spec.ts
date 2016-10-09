describe('Scope', ()=> {
    it("Can be constructed and used ad an object", ()=> {
        let scope = new Scope();
        scope.aProperty = 1;
        expect(scope.aProperty).toBe(1);
    })
})

describe('digest', ()=> {
    let scope: Scope;
    beforeEach(()=>{
        scope = new Scope();
    });

    it('calls the listener function of a watch on first $digest', ()=> {
        let watchFn = ()=> {
            return 'wat';
        }

        let listenerFn = jasmine.createSpy('lsadfistenerFn');

        scope.$watch(watchFn, listenerFn);

        scope.$digest();

        expect(listenerFn).toHaveBeenCalled();

    })
})
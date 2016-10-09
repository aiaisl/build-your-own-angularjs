interface Warcher {
    watchFn: Function;
    listenerFn: Function;
}
class Scope{
    $$watchers = [];
    $watch(watchFn, listenerFn) {
        let watcher = {
            watchFn: watchFn,
            listenerFn: listenerFn
        };

        this.$$watchers.push(watcher);
    }

    $digest() {
        _.forEach(this.$$watchers, (watcher)=>{
            watcher.listenerFn();
        })
    }
}
function solve(){
    let list = new SortedList();
    list.add(5);
    console.log(list.get(0));
    list.add(3);
    console.log(list.get(0));
    list.remove(0);
    console.log(list.get(0));
    console.log(list.size);
}

class SortedList{
    #list = [];
    size = 0;
    constructor(){
    }
    add(element){
        this.#list.push(element);
        this.#list.sort((curr, next) => curr - next);
        this.size++;
    }

    remove(index){
        if (!(index >= this.#list.length || index < 0)) {
            let copyList = [];
            for (let i = 0; i < this.#list.length; i++) {
                if (!(index == i)) {
                    copyList.push(this.#list[i]);
                }               
            }
            this.#list = copyList;
            this.size--;
        }
    }

    get(index){
        if (!(index >= this.#list.length || index < 0)) {
            return this.#list[index];
        }
    }
}
solve()

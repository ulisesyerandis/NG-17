export class studentModel {
    subscribe(arg0: { next: (response: any) => void; error: (error: any) => void; }) {
      
    }
    id: string;
    name: string;
  
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }

    // get id(): number {
    //   return this._id;
    // }
  
    // set id(id: number) {
    //   this._id = id;
    // }
  
    // get name(): string {
    //   return this._name;
    // }
  
    // set name(name: string) {
    //   this._name = name;
    // }
  }
export class studentModel {
    subscribe(arg0: { next: (response: any) => void; error: (error: any) => void; }) {
      
    }
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
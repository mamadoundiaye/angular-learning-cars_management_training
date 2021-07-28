// here is where we export the Car interface!
export interface Car {
  make: string;
  model: string;
  miles: number;
  owner?: string;
}

export interface Owner {
  nom: string;
  prenom: string;
  email: string;
}

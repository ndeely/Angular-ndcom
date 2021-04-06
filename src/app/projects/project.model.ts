export class Project {

  constructor(
    public id: number,
    public name: string,
    public desc: string,
    public imagePaths: string[],
    public urlPath: string
  ) {}
}

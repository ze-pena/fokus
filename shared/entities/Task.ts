export interface ITask {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  isCompleted: boolean;
}

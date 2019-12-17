import { IUser } from './user.model';
import { IAdmin } from './admin.model';
export enum RepetitionStatus {
  open = 0,
  approved = 1,
  declined = 2,
  inProgress = 3
}
export interface IRepetition {
  room_number: number;
  date: Date;
  user_id: number;
  start_time: Date | string;
  end_time: Date | string;
  admin_id: number;
  number_of_people: number;
  approved: RepetitionStatus;
  user?: IUser;
  admin?: IAdmin;
}

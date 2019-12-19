import { IUser } from './user.model';
import { IAdmin } from './admin.model';
export enum RepetitionStatus {
  open = 'OPEN',
  approved = 'APPROVED',
  declined = 'DECLINED',
  review = 'REVIEW'
}
export interface IRepetition {
  room_number: number;
  repetition_date: Date;
  user_id?: number;
  start_time: string;
  end_time: string;
  admin_id?: number;
  number_of_people?: number;
  approved: RepetitionStatus;
  repetition_id?: number;
  user?: IUser;
  admin?: IAdmin;
}

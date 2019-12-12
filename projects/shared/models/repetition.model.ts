import { IUser } from './user.model';
import { IAdmin } from './admin.model';

export interface IRepetition {
  room_number: number;
  date: string | Date;
  user_id: number;
  start_time: Date | string;
  end_time: Date | string;
  admin_id: number;
  number_of_people: number;
  approved: boolean;
  user?: IUser;
  admin?: IAdmin;
}

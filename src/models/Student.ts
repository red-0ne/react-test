import {
  UUID,
  FirstName,
  LastName,
  Username,
  Email,
  ImageURL
} from './';

export interface Student {
  id: UUID,
  firstName: FirstName,
  lastName: LastName,
  username: Username,
  email: Email,
  avatar: ImageURL,
}

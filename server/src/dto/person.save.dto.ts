export class PersonSaveDto {
  name: string;
  gender: 'female' | 'male';
  email: string;
  phone: string;
  thumbnail_image: string;
  large_image: string;
  country: string;
}
